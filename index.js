function shout(string){
  return string.toUpperCase()
}

function whisper(string){
  return string.toLowerCase()
}

function logShout(string){
  console.log('HELLO')
  return string('YES INDEED!')
}

function logWhisper(string){
  console.log('hello')
  return string('I can\'t hear you!')
}

function sayHiToGrandma(string){
  console.log('I love you, Grandma.')
  return string('I love you, too.')
}
