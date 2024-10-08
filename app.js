var botui=new BotUI('app');
const response=new Array();

botui.message.add({
    delay:2000,
    loading: true,
    photo: true,
    content: 'Hello. This is Alex, and I am a bot created by the customer service department.'
}).then(function(){
    return botui.message.add({
        delay:4000,
        loading: true,
        photo: true,
        content:'I am handling your request today. What brings you here?'
    });
}).then(function(){
    return botui.action.text({
        action: {
          placeholder: 'Enter your message.'
        }
    
    });
}).then(function (res) { 
    console.log(res.value);
    response.push(res.value);
}).then(function(){
    return botui.message.add({
        delay:4000,
        loading: true,
        photo: true,
        content:'I can help you with that. First, could you tell me your order number'
    });
}).then(function(){
    return botui.action.text({
        action: {
          placeholder: 'Enter your message.'
        }
    
    });
}).then(function (res) { 
    console.log(res.value);
    response.push(res.value);
}).then(function(){
    return botui.message.add({
        delay:2000,
        loading: true,
        photo: true,
        content:'Alright. Please give me a moment while pulling up your order.'
    });
}).then(function(){
    return botui.message.add({
        delay:6000,
        loading: true,
        photo: true,
        content:'You have ordered one pair of jeans, one swimsuit, and one necklace. Can you confirm?'
    });
}).then(function(){
    return botui.action.text({
        action: {
          placeholder: 'Enter your message.'
        }
    
    });
}).then(function (res) { 
    console.log(res.value);
    response.push(res.value);
}).then(function(){
    sendcomplete();
    return botui.message.add({
        delay:4000,
        loading: true,
        photo: true,
        content:'Oh, in fact, you ordered a different set of products. I accidentally pulled up the wrong order.'
    });
});

function sendcomplete(){
    window.parent.postMessage({"message": "completed","text1":response[0],"text2":response[1],"text3":response[2]}, "*");
};
