let jokes = [
    "Why was the math book sad? It had too many problems.",
    "Why don't scientists trust atoms? Because they make up everything.",
    "Why don't oysters give to charity? Because they're shellfish.",
    "Why did the tomato turn red? Because it saw the salad dressing.",
    "Why was the computer cold? It left its Windows open.",
    "Why did the scarecrow win an award? Because he was outstanding in his field.",
    "Why was the belt sent to jail? For holding up the pants.",
    "Why did the banana go to the doctor? Because it wasn't peeling well.",
    "Why did the chicken cross the playground? To get to the other slide.",
    "Why did the cookie go to the doctor? Because it was feeling crumbly.",
    "Why did the frog call his insurance company? He had a jump in his car.",
    "Why did the man put his money in the blender? He wanted to make liquid assets.",
    "Why did the old man fall in the well? Because he couldn't see that well.",
    "Why did the woman wear a lampshade on her head? To keep from getting a light-headed.",
    "Why did the ghost go to the bar? For the boos.",
    "Why did the scarecrow win an award? Because he was outstanding in his field.",
    "Why did the bicycle fall over? Because it was two-tired.",
    "Why did the computer go to the doctor? It had a virus.",
    "Why did the cookie go to the doctor? Because it was feeling crumbly.",
    "Why did the man put his money in the blender? He wanted to make liquid assets.",
    "Why did the boy bring string to the soccer game? He wanted to tie the score.",
    "Why did the man put his money in the blender? He wanted to make liquid assets.",
    "Why did the boy bring string to the soccer game? He wanted to tie the score.",
    "Why did the old man fall in the well? Because he couldn't see that well.",
    "Why did the woman wear a lampshade on her head? To keep from getting a light-headed.",
    "Why did the ghost go to the bar? For the boos.",
    "Why did the scarecrow win an award? Because he was outstanding in his field.",
    "Why did the bicycle fall over? Because it was two-tired.",
    "Why did the computer go to the doctor? It had a virus.",
    "Why did the cookie go to the doctor? Because it was feeling crumbly.",
    "Why did the boy bring string to the soccer game? He wanted to tie the score.",
    "Why did the man put his money in the blender? He wanted to make liquid assets.",
    "Why did the old man fall in the well? Because he couldn't see that well.",
    "Why did the woman wear a lampshade on her head? To keep from getting a light-headed.",
    "Why did the ghost go to the bar? For the boos.",
    "Why did the scarecrow win an award? Because he was outstanding in his field.",
    "Why did the bicycle fall over? Because it was two-tired.",
    "Why did the computer go to the doctor? It had a virus.",
    "Why did the cookie go to the doctor?"
]

let quote = document.getElementsByClassName('quote')

quote[0].innerHTML = jokes[Math.floor(Math.random() * jokes.length)]

// harry bhai solution

let myjokes = [
    {
      "category": "Programming",
      "type": "single",
      "joke": "// This line doesn't actually do anything, but the code stops working when I delete it.",
      "flags": {
        "nsfw": false,
        "religious": false,
        "political": false,
        "racist": false,
        "sexist": false,
        "explicit": false
      },
      "id": 12,
      "safe": true,
      "lang": "en"
    },
    {
      "category": "Programming",
      "type": "single",
      "joke": "\"Honey, go to the store and buy some eggs.\"\n\"OK.\"\n\"Oh and while you're there, get some milk.\"\nHe never returned.",
      "flags": {
        "nsfw": false,
        "religious": false,
        "political": false,
        "racist": false,
        "sexist": false,
        "explicit": false
      },
      "id": 18,
      "safe": true,
      "lang": "en"
    },
    {
      "category": "Programming",
      "type": "single",
      "joke": "Saying that Java is nice because it works on every OS is like saying that anal sex is nice because it works on every gender.",
      "flags": {
        "nsfw": true,
        "religious": false,
        "political": false,
        "racist": false,
        "sexist": false,
        "explicit": true
      },
      "id": 30,
      "safe": false,
      "lang": "en"
    },
    {
      "category": "Programming",
      "type": "single",
      "joke": "Hey Girl,\nRoses are #ff0000,\nViolets are #0000ff,\nI use hex codes,\nBut I'd use RGB for you.",
      "flags": {
        "nsfw": false,
        "religious": false,
        "political": false,
        "racist": false,
        "sexist": false,
        "explicit": false
      },
      "id": 41,
      "safe": true,
      "lang": "en"
    },
    {
      "category": "Programming",
      "type": "single",
      "joke": "\"We messed up the keming again guys.\"",
      "flags": {
        "nsfw": false,
        "religious": false,
        "political": false,
        "racist": false,
        "sexist": false,
        "explicit": false
      },
      "id": 20,
      "safe": true,
      "lang": "en"
    },
    {
      "category": "Programming",
      "type": "single",
      "joke": "A SQL statement walks into a bar and sees two tables.\nIt approaches, and asks \"may I join you?\"",
      "flags": {
        "nsfw": false,
        "religious": false,
        "political": false,
        "racist": false,
        "sexist": false,
        "explicit": false
      },
      "id": 5,
      "safe": true,
      "lang": "en"
    },
    {
      "category": "Programming",
      "type": "single",
      "joke": "Two SQL tables sit at the bar. A query approaches and asks \"Can I join you?\"",
      "flags": {
        "nsfw": false,
        "religious": false,
        "political": false,
        "racist": false,
        "sexist": false,
        "explicit": false
      },
      "id": 221,
      "safe": true,
      "lang": "en"
    },
    {
      "category": "Programming",
      "type": "single",
      "joke": "Documentation is like sex:\nWhen it's good, it's very good.\nWhen it's bad, it's better than nothing...",
      "flags": {
        "nsfw": true,
        "religious": false,
        "political": false,
        "racist": false,
        "sexist": false,
        "explicit": false
      },
      "safe": false,
      "id": 305,
      "lang": "en"
    },
    {
      "category": "Programming",
      "type": "single",
      "joke": "\"Can I tell you a TCP joke?\"\n\"Please tell me a TCP joke.\"\n\"OK, I'll tell you a TCP joke.\"",
      "flags": {
        "nsfw": false,
        "religious": false,
        "political": false,
        "racist": false,
        "sexist": false,
        "explicit": false
      },
      "id": 57,
      "safe": true,
      "lang": "en"
    },
    {
      "category": "Programming",
      "type": "single",
      "joke": "A byte walks into a bar looking miserable.\nThe bartender asks it: \"What's wrong buddy?\"\n\"Parity error.\" it replies. \n\"Ah that makes sense, I thought you looked a bit off.\"",
      "flags": {
        "nsfw": false,
        "religious": false,
        "political": false,
        "racist": false,
        "sexist": false,
        "explicit": false
      },
      "id": 24,
      "safe": true,
      "lang": "en"
    },
    {
      "category": "Programming",
      "type": "single",
      "joke": "UDP is better in the COVID era since it avoids unnecessary handshakes.",
      "flags": {
        "nsfw": false,
        "religious": false,
        "political": false,
        "racist": false,
        "sexist": false,
        "explicit": false
      },
      "id": 259,
      "safe": true,
      "lang": "en"
    },
    {
      "category": "Dark",
      "type": "single",
      "joke": "I'll never forget my Granddad's last words to me just before he died. \"Are you still holding the ladder?\"",
      "flags": {
        "nsfw": false,
        "religious": false,
        "political": false,
        "racist": false,
        "sexist": false,
        "explicit": false
      },
      "id": 208,
      "safe": false,
      "lang": "en"
    },
    {
      "category": "Misc",
      "type": "single",
      "joke": "My wife is really mad at the fact that I have no sense of direction.\nSo I packed up my stuff and right.",
      "flags": {
        "nsfw": false,
        "religious": false,
        "political": false,
        "racist": false,
        "sexist": false,
        "explicit": false
      },
      "id": 201,
      "safe": true,
      "lang": "en"
    },
    {
      "category": "Programming",
      "type": "single",
      "joke": "Debugging is like being the detective in a crime movie where you're also the murderer at the same time.",
      "flags": {
        "nsfw": false,
        "religious": false,
        "political": false,
        "racist": false,
        "sexist": false,
        "explicit": false
      },
      "id": 42,
      "safe": true,
      "lang": "en"
    },
    {
      "category": "Programming",
      "type": "single",
      "joke": "The glass is neither half-full nor half-empty, the glass is twice as big as it needs to be.",
      "flags": {
        "nsfw": false,
        "religious": false,
        "political": false,
        "racist": false,
        "sexist": false,
        "explicit": false
      },
      "id": 23,
      "safe": true,
      "lang": "en"
    },
    {
      "category": "Programming",
      "type": "single",
      "joke": "Eight bytes walk into a bar.\nThe bartender asks, \"Can I get you anything?\"\n\"Yeah,\" reply the bytes.\n\"Make us a double.\"",
      "flags": {
        "nsfw": false,
        "religious": false,
        "political": false,
        "racist": false,
        "sexist": false,
        "explicit": false
      },
      "id": 34,
      "safe": true,
      "lang": "en"
    },
    {
      "category": "Pun",
      "type": "single",
      "joke": "How do you make holy water? You boil the hell out of it.",
      "flags": {
        "nsfw": false,
        "religious": true,
        "political": false,
        "racist": false,
        "sexist": false,
        "explicit": false
      },
      "id": 202,
      "safe": false,
      "lang": "en"
    },
    {
      "category": "Programming",
      "type": "single",
      "joke": "I've got a really good UDP joke to tell you but I don’t know if you'll get it.",
      "flags": {
        "nsfw": false,
        "religious": false,
        "political": false,
        "racist": false,
        "sexist": false,
        "explicit": false
      },
      "id": 0,
      "safe": true,
      "lang": "en"
    },
    {
      "category": "Dark",
      "type": "single",
      "joke": "I hate double standards. Burn a body at a crematorium, you're \"being a respectful friend.\" Do it at home and you're \"destroying evidence.\"",
      "flags": {
        "nsfw": false,
        "religious": false,
        "political": false,
        "racist": false,
        "sexist": false,
        "explicit": true
      },
      "safe": false,
      "id": 274,
      "lang": "en"
    },
    {
      "category": "Misc",
      "type": "single",
      "joke": "What does the MacBook have in common with Donald Trump?\n\nI would tell you....\nBut I don't compare apples to oranges.",
      "flags": {
        "nsfw": false,
        "religious": false,
        "political": true,
        "racist": false,
        "sexist": false,
        "explicit": false
      },
      "id": 233,
      "safe": false,
      "lang": "en"
    }
  
  
  
  ]
  
  let index = Math.floor(Math.random() * (myjokes.length - 1))
  console.log(index)
  joke.innerHTML = myjokes[index].joke