console.log('Script is loaded! Host is online.')

function testEvalScript(msg) {
  console.log('Host is online')
  if (msg) alert(isJson(msg))
  else alert('Hello world')
  return msg ? JSON.stringify(msg) : {
    data: 'Hello world!'
  }
}

function isJson(text) {
  try {
    return JSON.parse(text)
  } catch(err) {
    alert(err)
  }
}