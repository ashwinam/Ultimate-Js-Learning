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
