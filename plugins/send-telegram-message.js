export default (props, inject) => {
  const sendTelegramMessage = async function (message) {
    const url = `
    https://api.telegram.org/bot
    ${process.env.telegramBotId}
    /sendMessage?chat_id=${props.env.telegramChatId}&text=${message}`;
    const body = JSON.stringify({
      "chat_id": props.env.telegramChatId,
      "text": message
    });
    const response = await props.$axios.post(url, body, {
      headers: {
        "Content-Type": "application/json",
        "cache-control": "no-cache",
        'Access-Control-Allow-Origin': '*',
      },
      mode: 'no-cors',
      crossDomain: true
    }).then(res => {
      return res.data
    }).catch((error) => {
      return {error: error.response}
    })

    console.log('response: ', response);
  }
  inject('sendTelegramMessage', sendTelegramMessage)
}
