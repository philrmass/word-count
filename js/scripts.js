function parseWords(text) {
  const nonWords = /[^a-z']+/g;
  const quotes = /([a-z]*'[^a-z]+|[^a-z]+'[a-z]*)/g;

  text = text.toLowerCase();
  text = text.replace(nonWords, " ");
  text = text.replace(quotes, " ");

  return text.split(" ");
}

function countWords(counter, word) {
  counter[word] = (counter[word] || 0) + 1;
  return counter;
};


function addWordCount(parent, word, count, countMax) {
    let listItem = document.createElement("li");
    let wordSpan = document.createElement("span");
    let wordText = document.createTextNode(word);
    let countSpan = document.createElement("span");
    let countText = document.createTextNode(count);

    listItem.appendChild(wordSpan);
    wordSpan.appendChild(wordText);
    listItem.appendChild(countSpan);
    countSpan.appendChild(countText);
    parent.appendChild(listItem);

    const maxPercentage = 98;
    const ratio = (maxPercentage * (count / countMax)).toFixed(1);
    wordSpan.classList.add("words");
    countSpan.classList.add("counts");
    countSpan.style.width = ratio + "%";
}

function displayWords(wordCounter) {
  let words = Object.getOwnPropertyNames(wordCounter);
  words.sort(function (a, b) {
    return wordCounter[b] - wordCounter[a];
  })

  let countMax = words.length && wordCounter[words[0]];
  let outputWords = document.getElementById("output-words");
  let outputCounts = document.getElementById("output-counts");
  outputWords.innerHTML = "";
  outputCounts.innerHTML = "";
  words.forEach(function(word) {
    if(word) {
      addWordCount(outputWords, word, wordCounter[word], countMax);
      addWordCount(outputCounts, word, wordCounter[word], countMax);
    }
  })
}

document.addEventListener("DOMContentLoaded", function() {
  let declaration = document.getElementById("declaration");
  let gettysburg = document.getElementById("gettysburg");
  let catHat = document.getElementById("cat-hat");
  let tellTale = document.getElementById("tell-tale");
  let wordsText = document.getElementById("words-text");
  let count = document.getElementById("count");
  let clear = document.getElementById("clear");
  let outputWords = document.getElementById("output-words");
  let outputCounts = document.getElementById("output-counts");

  declaration.onclick = function() {
    wordsText.value = declarationText;
  };
  gettysburg.onclick = function() {
    wordsText.value = gettysburgText;
  }
  catHat.onclick = function() {
    wordsText.value = catHatText;
  };
  tellTale.onclick = function() {
    wordsText.value = tellTaleText;
  };
  clear.onclick = function() {
    wordsText.value = "";
    outputWords.innerHTML = "";
    outputCounts.innerHTML = "";
  }

  count.onclick = function() {
    var words = parseWords(wordsText.value);
    var wordCounter = words.reduce(countWords, {});
    displayWords(wordCounter);
  }
});

const gettysburgText = "Four score and seven years ago our fathers brought forth on this continent, a new nation, conceived in Liberty, and dedicated to the proposition that all men are created equal.\n\nNow we are engaged in a great civil war, testing whether that nation, or any nation so conceived and so dedicated, can long endure. We are met on a great battle-field of that war. We have come to dedicate a portion of that field, as a final resting place for those who here gave their lives that that nation might live. It is altogether fitting and proper that we should do this.\n\nBut, in a larger sense, we can not dedicate -- we can not consecrate -- we can not hallow -- this ground. The brave men, living and dead, who struggled here, have consecrated it, far above our poor power to add or detract. The world will little note, nor long remember what we say here, but it can never forget what they did here. It is for us the living, rather, to be dedicated here to the unfinished work which they who fought here have thus far so nobly advanced. It is rather for us to be here dedicated to the great task remaining before us -- that from these honored dead we take increased devotion to that cause for which they gave the last full measure of devotion -- that we here highly resolve that these dead shall not have died in vain -- that this nation, under God, shall have a new birth of freedom -- and that government of the people, by the people, for the people, shall not perish from the earth.";

const catHatText = "the sun did not shine.\nit was too wet to play.\nso we sat in the house\nall that cold, cold, wet day.\n\ni sat there with sally.\nwe sat there, we two.\nand i said, 'how i wish\nwe had something to do!'\n\ntoo wet to go out\nand too cold to play ball.\nso we sat in the house.\nwe did nothing at all.\n\nso all we could do was to\nsit!\n   sit!\n      sit!\n         sit!\nand we did not like it.\nnot one little bit.\n\nand then something went BUMP!\nhow that bump made us jump!\nwe looked!\nthen we saw him step in on the mat!\nwe looked!\nand we saw him!\nthe cat in the hat!\nand he said to us,\n'why do you sit there like that?'\n'i know it is wet\nand the sun is not sunny.\nbut we can have\nlots of good fun that is funny!'\n\n'i know some good games we could play,'\nsaid the cat.\n'i know some new tricks,'\nsaid the cat in the hat.\n'a lot of good tricks.\ni will show them to you.\nyour mother will not mind at all if i do.'\n\nthen sally and i\ndid not know what to say.\nour mother was out of the house\nfor the day.\n\nbut our fish said, 'no! no!\nmake that cat go away!\ntell that cat in the hat\nyou do NOT want to play.\nhe should not be here.\nhe should not be about.\nhe should not be here\nwhen your mother is out!'\n\n'now! now!  have no fear.\nhave no fear!' said the cat.\n'my tricks are not bad,'\nsaid the cat in the hat.\n'why, we can have\nlots of good fun, if you wish,\nwith a game that i call\nup-up-up with a fish!'\n\n'put me down!' said the fish.\n'this is no fun at all!\nput me down!' said the fish.\n'i do NOT wish to fall!'\n\n'have no fear!' said the cat.\n'i will not let you fall.\ni will hold you up high\nas i stand on a ball.\nwith a book one one hand!\nand a cup on my hat!\nbut that is not ALL i can do!\nsaid the cat...\n\n'look at me!\nlook at me now!' said the cat.\n'with a cup and a cake\non the top of my hat!\ni can hold up TWO books!\ni can hold up the fish!\nand a little toy ship!\nand some milk on a dish!\nand look!\ni can hop up and down on the ball!\nbut that is not all!\noh, no.\nthat is not all...\n\n'look at me!\nlook at me!\nlook at me NOW!\nit is fun to have fun\nbut you have to know how.\ni can hold up the cup\nand the milk and the cake!\ni can hold up these books!\nand the fish on a rake!\ni can hold the toy ship\nand a little toy man!\nand look!  with my tail\ni can hold a red fan!\ni can fan with the fan\nas i hop on the ball!\nbut that is not all.\noh, no.\nthat is not all...'\n\nthat is what the cat said...\nthen he fell on his head!\nhe came down with a bump\nfrom up there on the ball.\nand sally and i,\nwe saw ALL the things fall!\n\nand our fish came down, too.\nhe fell into a pot!\nhe said, 'do i like this?\noh, no!  i do not.\nthis is not a good game,'\nsaid our fish as he lit.\n'no, i do not like it,\nnot one little bit!'\n\n'now look what you did!'\nsaid the fish to the cat.\n'now look at this house!\nlook at this!  look at that!\nyou sank our toy ship,\nsank it deep in the cake.\nyou shook up our house\nand you bent our new rake.\nyou SHOULD NOT be here\nwhen our mother is not.\nyou get out of this house!'\nsaid the fish in the pot.\n\n'but i like to be here.\noh, i like it a lot!'\nsaid the cat in the hat\nto the fish in the pot.\n'i will NOT go away.\ni do NOT wish to go!\nand so,' said the cat in the hat,\n'so\n  so\n   so...\ni will show you\nanother good game that i know!'\n\nand then he ran out.\nand, then, fast as a fox,\nthe cat in the hat\ncame back in with a box.\na big red wood box.\nit was shut with a hook.\n'now look at this trick,'\nsaid the cat.\n'take a look!'\n\nthen he got up on top\nwith a tip of his hat.\n'i call this game fun-in-a-box,'\nsaid the cat.\n'in this box are two things\ni will show to you now.\nyou will like these two things,'\nsaid the cat with a bow.\n\n'i will pick up the hook.\nyou will see something new.\ntwo things.  and i call them\nThing One and Thing Two.\nthese Things will not bite you.\nthey want to have fun.'\nthen, out of the box\ncame Thing Two and Thing One!\nand they ran to us fast.\nthey said, 'how do you do?\nwould you like to shake hands\nwith Thing One and Thing Two?'\n\nand sally and i\ndid not know what to do.\nso we had to shake hands\nwith Thing One and Thing Two.\nwe shook their two hands.\nbut our fish said, 'no! no!\nthose Things should not be\nin this house!  make them go!\nthey should not be here\nwhen your mother is not!\nput them out!  put them out!'\nsaid the fish in the pot.\n\n'have no fear, little fish,'\nsaid the cat in the hat.\n'these Things are good Things.'\nand he gave them a pat.\n'they are tame.  oh, so tame!\nthey have come here to play.\nthey will give you some fun\non this wet, wet, wet day.'\n\nnow, here is a game that they like,'\nsaid the cat.\n'they like to fly kites,'\nsaid the cat in the hat.\n\n'no!  not in the house!'\nsaid the fish in the pot.\n'they should not fly kites\nin a house!  they should not.\noh, the things they will bump!\noh, the things they will hit!\noh, i do not like it!\nnot one little bit!'\n\nthen sally and i\nsaw them run down the hall.\nwe saw those two Things\nbump their kites on the wall!\nbump! thump! thump! bump!\ndown the wall in the hall.\n\nthing two and thing one!\nthey ran up!  they ran down!\non the string of one kite\nwe saw mother's new gown!\nher gown with the dots\nthat are pink, white and red.\nthen we saw one kite bump\non the head of her bed!\n\nthen those things ran about\nwith big bumps, jumps and kicks\nand with hops and big thumps\nand all kinds of bad tricks.\nand i said,\n'i do NOT like the way that they play!\nif mother could see this,\noh, what would she say!'\n\nthen our fish said, 'look! look!'\nand our fish shook with fear.\n'your mother is on her way home!\ndo you hear?\noh, what will she do to us?\nwhat will she say?\noh, she will not like it\nto find us this way!'\n\n'so DO something! fast!' said the fish.\n'do you hear!\ni saw her.  your mother!\nyour mother is near!\nso, as fast as you can,\nthink of something to do!\nyou will have to get rid of\nthing one and thing two!'\n\nso, as fast as i could,\ni went after my net.\nand i said, 'with my net\ni can get them i bet.\ni bet, with my net,\ni can get those things yet!'\n\nthen i let down my net.\nit came down with a PLOP!\nand i had them!  at last!\nthose two things had to stop.\nthen i said to the cat,\n'now you do as i say.\nyou pack up those Things\nand you take them away!'\n\n'oh dear!' said the cat.\n'you did not like our game...\noh dear.\n       what a shame!\n            what a shame!\n                 what a shame!'\n\nthen he shut up the things\nin the box with the hook.\nand the cat went away\nwith a sad kind of look.\n\n'that is good,' said the fish.\n'he has gone away.  yes.\nbut your mother will come.\nshe will find this big mess!\nand this mess is so big\nand so deep and so tall,\nwe can not pick it up.\nthere is no way at all!'\n\nand THEN!\nwho was back in the house?\nwhy, the cat!\n'have no fear of this mess,'\nsaid the cat in the hat.\n'i always pick up all my playthings\nand so...\ni will show you another\ngood trick that i know!'\n\nthen we saw him pick up all the things that were down.\nhe picked up the cake,\nand the rake, and the gown,\nand the milk, and the strings,\nand the books, and the dish,\nand the fan, and the cup,\nand the ship, and the fish.\nand he put them away.\nthen he said, 'that is that.'\nand then he was gone\nwith a tip of his hat.\n\nthen our mother came in\nand she said to us two,\n'did you have any fun?\ntell me.  what did you do?'\n\nand sally and i did not know\nwhat to say.\nshould we tell her\nthe things that went on there that day?\n\nshould we tell her about it?\nnow, what SHOULD we do?\nwell...\nwhat would YOU do\nif your mother asked YOU?";

const declarationText = "In Congress, July 5, 1776.\n\nThe unanimous Declaration of the thirteen united States of America, When in the Course of human events, it becomes necessary for one people to dissolve the political bands which have connected them with another, and to assume among the powers of the earth, the separate and equal station to which the Laws of Nature and of Nature's God entitle them, a decent respect to the opinions of mankind requires that they should declare the causes which impel them to the separation.\n\nWe hold these truths to be self-evident, that all men are created equal, that they are endowed by their Creator with certain unalienable Rights, that among these are Life, Liberty and the pursuit of Happiness.--That to secure these rights, Governments are instituted among Men, deriving their just powers from the consent of the governed, --That whenever any Form of Government becomes destructive of these ends, it is the Right of the People to alter or to abolish it, and to institute new Government, laying its foundation on such principles and organizing its powers in such form, as to them shall seem most likely to effect their Safety and Happiness. Prudence, indeed, will dictate that Governments long established should not be changed for light and transient causes; and accordingly all experience hath shewn, that mankind are more disposed to suffer, while evils are sufferable, than to right themselves by abolishing the forms to which they are accustomed. But when a long train of abuses and usurpations, pursuing invariably the same Object evinces a design to reduce them under absolute Despotism, it is their right, it is their duty, to throw off such Government, and to provide new Guards for their future security.--Such has been the patient sufferance of these Colonies; and such is now the necessity which constrains them to alter their former Systems of Government. The history of the present King of Great Britain is a history of repeated injuries and usurpations, all having in direct object the establishment of an absolute Tyranny over these States. To prove this, let Facts be submitted to a candid world.\n\nHe has refused his Assent to Laws, the most wholesome and necessary for the public good.\n\nHe has forbidden his Governors to pass Laws of immediate and pressing importance, unless suspended in their operation till his Assent should be obtained; and when so suspended, he has utterly neglected to attend to them.\n\nHe has refused to pass other Laws for the accommodation of large districts of people, unless those people would relinquish the right of Representation in the Legislature, a right inestimable to them and formidable to tyrants only.\n\nHe has called together legislative bodies at places unusual, uncomfortable, and distant from the depository of their public Records, for the sole purpose of fatiguing them into compliance with his measures.\n\nHe has dissolved Representative Houses repeatedly, for opposing with manly firmness his invasions on the rights of the people.\n\nHe has refused for a long time, after such dissolutions, to cause others to be elected; whereby the Legislative powers, incapable of Annihilation, have returned to the People at large for their exercise; the State remaining in the mean time exposed to all the dangers of invasion from without, and convulsions within.\n\nHe has endeavoured to prevent the population of these States; for that purpose obstructing the Laws for Naturalization of Foreigners; refusing to pass others to encourage their migrations hither, and raising the conditions of new Appropriations of Lands.\n\nHe has obstructed the Administration of Justice, by refusing his Assent to Laws for establishing Judiciary powers.\n\nHe has made Judges dependent on his Will alone, for the tenure of their offices, and the amount and payment of their salaries.\n\nHe has erected a multitude of New Offices, and sent hither swarms of Officers to harrass our people, and eat out their substance.\n\nHe has kept among us, in times of peace, Standing Armies without the Consent of our legislatures.\n\nHe has affected to render the Military independent of and superior to the Civil power.\n\nHe has combined with others to subject us to a jurisdiction foreign to our constitution, and unacknowledged by our laws; giving his Assent to their Acts of pretended Legislation:\n\nFor Quartering large bodies of armed troops among us:\n\nFor protecting them, by a mock Trial, from punishment for any Murders which they should commit on the Inhabitants of these States:\n\nFor cutting off our Trade with all parts of the world:\n\nFor imposing Taxes on us without our Consent:\n\nFor depriving us in many cases, of the benefits of Trial by Jury:\n\nFor transporting us beyond Seas to be tried for pretended offences\n\nFor abolishing the free System of English Laws in a neighbouring Province, establishing therein an Arbitrary government, and enlarging its Boundaries so as to render it at once an example and fit instrument for introducing the same absolute rule into these Colonies:\n\nFor taking away our Charters, abolishing our most valuable Laws, and altering fundamentally the Forms of our Governments:\n\nFor suspending our own Legislatures, and declaring themselves invested with power to legislate for us in all cases whatsoever.\n\nHe has abdicated Government here, by declaring us out of his Protection and waging War against us.\n\nHe has plundered our seas, ravaged our Coasts, burnt our towns, and destroyed the lives of our people.\n\nHe is at this time transporting large Armies of foreign Mercenaries to compleat the works of death, desolation and tyranny, already begun with circumstances of Cruelty & perfidy scarcely paralleled in the most barbarous ages, and totally unworthy the Head of a civilized nation.\n\nHe has constrained our fellow Citizens taken Captive on the high Seas to bear Arms against their Country, to become the executioners of their friends and Brethren, or to fall themselves by their Hands.\n\nHe has excited domestic insurrections amongst us, and has endeavoured to bring on the inhabitants of our frontiers, the merciless Indian Savages, whose known rule of warfare, is an undistinguished destruction of all ages, sexes and conditions.\n\nIn every stage of these Oppressions We have Petitioned for Redress in the most humble terms: Our repeated Petitions have been answered only by repeated injury. A Prince whose character is thus marked by every act which may define a Tyrant, is unfit to be the ruler of a free people.\n\nNor have We been wanting in attentions to our Brittish brethren. We have warned them from time to time of attempts by their legislature to extend an unwarrantable jurisdiction over us. We have reminded them of the circumstances of our emigration and settlement here. We have appealed to their native justice and magnanimity, and we have conjured them by the ties of our common kindred to disavow these usurpations, which, would inevitably interrupt our connections and correspondence. They too have been deaf to the voice of justice and of consanguinity. We must, therefore, acquiesce in the necessity, which denounces our Separation, and hold them, as we hold the rest of mankind, Enemies in War, in Peace Friends.\n\nWe, therefore, the Representatives of the United States of America, in General Congress, Assembled, appealing to the Supreme Judge of the world for the rectitude of our intentions, do, in the Name, and by Authority of the good People of these Colonies, solemnly publish and declare, That these United Colonies are, and of Right ought to be Free and Independent States; that they are Absolved from all Allegiance to the British Crown, and that all political connection between them and the State of Great Britain, is and ought to be totally dissolved; and that as Free and Independent States, they have full Power to levy War, conclude Peace, contract Alliances, establish Commerce, and to do all other Acts and Things which Independent States may of right do. And for the support of this Declaration, with a firm reliance on the protection of divine Providence, we mutually pledge to each other our Lives, our Fortunes and our sacred Honor";

const tellTaleText="TRUE!-NERVOUS--very, very dreadfully nervous I had been and am! but why will you say that I am mad? The disease had sharpened my senses--not destroyed--not dulled them. Above all was the sense of hearing acute. I heard all things in the heaven and in the earth. I heard many things in hell. How, then, am I mad? Hearken! and observe how healthily--how calmly I can tell you the whole story.\n\nIt is impossible to tell how first the idea entered my brain; but once conceived, it haunted me day and night. Object there was none. Passion there was none. I loved the old man. He had never wronged me. He had never given me insult. For his gold I had no desire. I think it was his eye! Yes, it was this! One of his eyes resembled that of a vulture--a pale blue eye, with a film over it. Whenever it fell upon me, my blood ran cold; and so by degrees--very gradually--I made up my mind to take the life of the old man, and thus rid myself of the eye forever.\n\nNow this is the point. You fancy me mad. Madmen know nothing. But you should have seen me. You should have seen how wisely I proceeded--with what caution--with what foresight--with what dissimulation I went to work!\n\nI was never kinder to the old man than during the whole week before I killed him. And every night, about midnight, I turned the latch of his door and opened it--oh, so gently! And then, when I had made an opening sufficient for my head, I put in a dark lantern, all closed, closed, so that no light shone out, and then I thrust in my head. Oh, you would have laughed to see how cunningly I thrust it in! I moved it slowly--very, very slowly, so that I might not disturb the old man's sleep. It took me an hour to place my whole head within the opening so far that I could see him as he lay upon his bed. Ha!--would a madman have been so wise as this? And then, when my head was well in the room, I undid the lantern cautiously--oh, so cautiously--cautiously (for the hinges creaked)--I undid it just so much that a single thin ray fell upon the vulture eye. And this I did for seven long nights--every night just at midnight--but I found the eye always closed; and so it was impossible to do the work; for it was not the old man who vexed me, but his Evil Eye. And every morning, when the day broke, I went boldly into the chamber, and spoke courageously to him, calling him by name in a hearty tone, and inquiring how he had passed the night. So you see he would have been a very profound old man, indeed, to suspect that every night, just at twelve, I looked in upon him while he slept.\n\nUpon the eighth night I was more than usually cautious in opening the door. A watch's minute hand moves more quickly than did mine. Never before that night had I felt the extent of my own powers--of my sagacity. I could scarcely contain my feelings of triumph. To think that there I was, opening the door, little by little, and he not even to dream of my secret deeds or thoughts. I fairly chuckled at the idea; and perhaps he heard me; for he moved on the bed suddenly, as if startled. Now you may think that I drew back--but no. His room was as black as pitch with the thick darkness (for the shutters were close fastened, through fear of robbers), and so I knew that he could not see the opening of the door, and I kept pushing it on steadily, steadily.\n\nI had my head in, and was about to open the lantern, when my thumb slipped upon the tin fastening, and the old man sprang up in bed, crying out: 'Who's there?'\n\nI kept quite still and said nothing. For a whole hour I did not move a muscle, and in the meantime I did not hear him lie down. He was still sitting up in the bed listening;--just as I have done, night after night, hearkening to the death watches in the wall.\n\nPresently I heard a slight groan, and I knew it was the groan of mortal terror. It was not a groan of pain or grief--oh no!--it was the low stifled sound that arises from the bottom of the soul when overcharged with awe. I knew the sound well. Many a night, just at midnight, when all the world slept, it has welled up from my own bosom, deepening, with its dreadful echo, the terrors that distracted me. I say I knew it well. I knew what the old man felt, and pitied him, although I chuckled at heart. I knew that he had been lying awake ever since the first slight noise, when he had turned in the bed. His fears had been ever since growing upon him. He had been trying to fancy them causeless, but could not. He had been saying to himself: 'It is nothing but the wind in the chimney--it is only a mouse crossing the floor,' or 'it is merely a cricket which has made a single chirp.' Yes, he had been trying to comfort himself with these suppositions; but he had found all in vain. All in vain; because Death, in approaching him. had stalked with his black shadow before him, and enveloped the victim. And it was the mournful influence of the unperceived shadow that caused him to feel--although he neither saw nor heard--to feel the presence of my head within the room.\n\nWhen I had waited a long time, very patiently, without hearing him lie down, I resolved to open a little--a very, very little crevice in the lantern. So I opened it--you cannot imagine how stealthily, stealthily--until, at length, a single dim ray, like the thread of the spider, shot from out the crevice and full upon the vulture eye.\n\nIt was open--wide, wide open--and I grew furious as I gazed upon it. I saw it with perfect distinctness--all a dull blue, with a hideous veil over it that chilled the very marrow in my bones; but I could see nothing else of the old man's face or person: for I had directed the ray, as if by instinct, precisely upon the damned spot.\n\nAnd now--have I not told you that what you mistake for madness is but over-acuteness of the senses?--now, I say, there came to my ears a low, dull, quick sound, such as a watch makes when enveloped in cotton. I knew that sound well too. It was the beating of the old man's heart. It increased my fury, as the beating of a drum stimulates the soldier into courage.\n\nBut even yet I refrained and kept still. I scarcely breathed. I held the lantern motionless. I tried how steadily I could maintain the ray upon the eye. Meantime the hellish tattoo of the heart increased. It grew quicker and quicker and louder and louder every instant. The old man's terror must have been extreme! It grew louder, I say, louder every moment!--do you mark me well? I have told you that I am nervous: so I am. And now at the dead hour of night, amid the dreadful silence of that old house, so strange a noise as this excited me to uncontrollable terror. Yet, for some minutes longer I refrained and stood still. But the beating grew louder, louder! I thought the heart must burst. And now a new anxiety seized me--the sound would be heard by a neighbor! The old man's hour had come! With a loud yell, I threw open the lantern and leaped into the room. He shrieked once--once only. In an instant I dragged him to the floor, and pulled the heavy bed over him. I then smiled gaily, to find the deed so far done. But, for many minutes, the heart beat on with a muffled sound. This, however, did not vex me; it would not be heard through the wall. At length it ceased. The old man was dead. I removed the bed and examined the corpse. Yes, he was stone, stone dead. I placed my hand upon the heart and held it there many minutes. There was no pulsation. He was stone dead. His eye would trouble me no more.\n\nIf still you think me mad, you will think so no longer when I describe the wise precautions I took for the concealment of the body. The night waned, and I worked hastily, but in silence. First of all I dismembered the corpse. I cut off the head and the arms and the legs.\n\nI then took up three planks from the flooring of the chamber, and deposited all between the scantlings. I then replaced the boards so cleverly, so cunningly, that no human eye--not even his--could have detected anything wrong. There was nothing to wash out--no stain of any kind--no blood-spot whatever. I had been too wary for that. A tub had caught all--ha! ha!\n\nWhen I had made an end of these labors, it was four o'clock--still dark as midnight. As the bell sounded the hour, there came a knocking at the street door. I went down to open it with a light heart--for what had I now to fear? There entered three men, who introduced themselves, with perfect suavity, as officers of the police. A shriek had been heard by a neighbor during the night: suspicion of foul play had been aroused; information had been lodged at the police office, and they (the officers) had been deputed to search the premises.\n\nI smiled--for what had I to fear? I bade the gentlemen welcome. The shriek, I said, was my own in a dream. The old man, I mentioned, was absent in the country. I took my visitors all over the house. I bade them search--search well. I led them, at length, to his chamber. I showed them his treasures, secure, undisturbed. In the enthusiasm of my confidence, I brought chairs into the room, and desired them here to rest from their fatigues, while I myself, in the wild audacity of my perfect triumph, placed my own seat upon the very spot beneath which reposed the corpse of the victim.\n\nThe officers were satisfied. My manner had convinced them. I was singularly at ease. They sat, and while I answered cheerily, they chatted familiar things. But, ere long, I felt myself getting pale and wished them gone. My head ached, and I fancied a ringing in my ears: but still they sat and still chatted. The ringing became more distinct:--it continued and became more distinct: I talked more freely to get rid of the feeling: but it continued and gained definiteness--until, at length, I found that the noise was not within my ears.\n\nNo doubt I now grew very pale,--but I talked more fluently, and with a heightened voice. Yet the sound increased--and what could I do? It was a low, dull, quick sound--much such a sound as a watch makes when enveloped in cotton. I gasped for breath--and yet the officers heard it not. I talked more quickly--more vehemently; but the noise steadily increased. Why would they not be gone? I paced the floor to and fro with heavy strides, as if excited to fury by the observation of the men--but the noise steadily increased. Oh, God; what could I do? I foamed--I raved--I swore! I swung the chair upon which I had been sitting, and grated it upon the boards, but the noise arose over all and continually increased. It grew louder--louder --louder! And still the men chatted pleasantly, and smiled. Was it possible they heard not? Almighty God!--no, no! They heard!--they suspected--they knew!--they were making a mockery of my horror!--this I thought, and this I think. But anything was better than this agony! Anything was more tolerable than this derision! I could bear those hypocritical smiles no longer! I felt that I must scream or die!--and now--again!--hark! louder! louder! louder!\n\n'Villains!' I shrieked, 'dissemble no more! I admit the deed!--tear up the planks!--here, here!--it is the beating of his hideous heart!'\n"
