import { useState, useEffect, useRef, useCallback } from "react";

function useAdvancedWebSocket({
  url,
  token, // 可用于拼接 URL 或发送认证消息
  onMessage,
  onOpen,
  onClose,
  onError,
  reconnectInterval = 3000, // 重连间隔(ms)
  maxReconnectAttempts = 5, // 最大重连次数
  heartbeatInterval = 30000, // 心跳间隔(ms)，null 表示不开启
  heartbeatMessage = JSON.stringify({ type: "ping" }), // 心跳消息内容
}) {
  const [isConnected, setIsConnected] = useState(false);
  const [reconnectAttempts, setReconnectAttempts] = useState(0);

  const socketRef = useRef(null);
  const messageQueueRef = useRef([]); // 消息队列
  const heartbeatRef = useRef(null); // 心跳定时器
  const reconnectTimerRef = useRef(null); // 重连定时器

  // 清理函数：关闭 socket、清除定时器
  const cleanup = useCallback(() => {
    if (socketRef.current) {
      socketRef.current.close();
      socketRef.current = null;
    }
    if (heartbeatRef.current) {
      clearInterval(heartbeatRef.current);
      heartbeatRef.current = null;
    }
    if (reconnectTimerRef.current) {
      clearTimeout(reconnectTimerRef.current);
      reconnectTimerRef.current = null;
    }
  }, []);

  // 发送心跳
  const startHeartbeat = useCallback(() => {
    if (heartbeatInterval && socketRef.current?.readyState === WebSocket.OPEN) {
      heartbeatRef.current = setInterval(() => {
        if (socketRef.current?.readyState === WebSocket.OPEN) {
          socketRef.current.send(heartbeatMessage);
          console.log("🫀 发送心跳:", heartbeatMessage);
        }
      }, heartbeatInterval);
    }
  }, [heartbeatInterval, heartbeatMessage]);

  // 停止心跳
  const stopHeartbeat = useCallback(() => {
    if (heartbeatRef.current) {
      clearInterval(heartbeatRef.current);
      heartbeatRef.current = null;
    }
  }, []);

  // 尝试重连
  const tryReconnect = useCallback(() => {
    if (reconnectAttempts >= maxReconnectAttempts) {
      console.log("🔌 已达到最大重连次数，停止重连");
      return;
    }

    setReconnectAttempts((prev) => prev + 1);
    console.log(`🔁 尝试重连中... 第 ${reconnectAttempts + 1} 次`);

    reconnectTimerRef.current = setTimeout(() => {
      initWebSocket();
    }, reconnectInterval);
  }, [reconnectAttempts, maxReconnectAttempts, reconnectInterval]);

  // 初始化 WebSocket
  const initWebSocket = useCallback(() => {
    cleanup();

    let finalUrl = url;
    // 如果传入了 token，可以拼接到 URL（也可以选择在连接后发送认证消息）
    if (token && !finalUrl.includes("token=")) {
      finalUrl += (finalUrl.includes("?") ? "&" : "?") + `token=${token}`;
    }

    const socket = new WebSocket(finalUrl);
    socketRef.current = socket;

    // 连接成功
    socket.addEventListener("open", () => {
      console.log("✅ WebSocket 已连接");
      setIsConnected(true);
      setReconnectAttempts(0); // 重置重连次数
      onOpen?.();

      // 发送积压的消息
      while (messageQueueRef.current.length > 0) {
        const msg = messageQueueRef.current.shift();
        console.log("📤 发送队列中的消息:", msg);
        socket.send(msg);
      }

      // 开启心跳
      startHeartbeat();
    });

    // 接收消息
    socket.addEventListener("message", (event) => {
      console.log("📥 收到消息:", event.data);
      onMessage?.(event.data);
    });

    // 连接关闭
    socket.addEventListener("close", () => {
      console.log("❌ WebSocket 已断开");
      setIsConnected(false);
      onClose?.();
      stopHeartbeat();

      // 尝试自动重连
      tryReconnect();
    });

    // 出错
    socket.addEventListener("error", (error) => {
      console.error("⚠️ WebSocket 错误:", error);
      onError?.(error);
    });
  }, [
    url,
    token,
    onMessage,
    onOpen,
    onClose,
    onError,
    startHeartbeat,
    stopHeartbeat,
    tryReconnect,
    cleanup,
  ]);

  // 发送消息
  const sendMessage = useCallback(
    (message) => {
      if (typeof message !== "string") {
        message = JSON.stringify(message); // 支持对象自动转 JSON
      }

      if (!socketRef.current) {
        console.warn("⚠️ WebSocket 未初始化，消息加入队列");
        messageQueueRef.current.push(message);
        initWebSocket(); // 尝试初始化连接
        return;
      }

      if (socketRef.current.readyState === WebSocket.OPEN) {
        console.log("📤 发送消息:", message);
        socketRef.current.send(message);
      } else {
        console.warn("⚠️ WebSocket 未就绪，消息加入队列");
        messageQueueRef.current.push(message);
      }
    },
    [initWebSocket]
  );

  // 手动重连（可选功能）
  const reconnect = useCallback(() => {
    setReconnectAttempts(0);
    tryReconnect();
  }, [tryReconnect]);

  // 组件挂载时初始化 WebSocket
  useEffect(() => {
    initWebSocket();

    // 清理
    return () => {
      cleanup();
    };
  }, [initWebSocket, cleanup]);

  // 暴露给组件的方法和状态
  return {
    sendMessage,
    isConnected,
    reconnect, // 可选：手动触发重连
    reconnectAttempts, // 可选：当前重连次数（可用于 UI 显示）
  };
}

export default useAdvancedWebSocket;
