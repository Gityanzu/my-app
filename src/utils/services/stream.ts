export async function streamChat(
  message: string,
  onMessage: (text: string) => void,
  onComplete?: () => void,
  onError?: (err: any) => void
) {
  try {
    const res = await fetch('/api/chat/stream', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${localStorage.getItem('token')}`
      },
      body: JSON.stringify({ message })
    })

    if (!res.ok || !res.body) throw new Error('Stream response error')

    const reader = res.body.getReader()
    const decoder = new TextDecoder('utf-8')
    let partial = ''

    while (true) {
      const { done, value } = await reader.read()
      if (done) break

      partial += decoder.decode(value, { stream: true })
      onMessage(partial) // 每次更新全部内容
    }

    onComplete?.()
  } catch (err) {
    onError?.(err)
  }
}
