var botui=new BotUI('app');
const response=new Array();

botui.message.add({
    delay:1000,
    loading: true,
    content: 'Hello. This is Alex, and I am a bot created by the customer service department.'
}).then(function(){
    return botui.message.add({
        delay:1000,
        loading: true,
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
        delay:2000,
        loading: true,
        content:'I do not understand what you said.'
    });
}).then(function(){
    return botui.message.add({
        delay:3000,
        loading: true,
        content:'I really feel your frustration for this.'
    });
}).then(function(){
    return botui.message.add({
        delay:3000,
        loading: true,
        content:'Can you please try again?'
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
        content:'I can help you with that. First, could you tell me your order number?'
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
        content:'Got it. Please allow me few seconds for pulling up your order.'
    });
}).then(function(){
    return botui.message.add({
        delay:4000,
        loading: true,
        content:'I checked your order. There has been a system error, and no driver was assigned to your order.'
    });
}).then(function(){
    return botui.message.add({
        delay:2000,
        loading: true,
        content:'We found a nearest driver, and your food can be picked up within five minutes.'
    });
}).then(function(){
    return botui.message.add({
        delay:2000,
        loading: true,
        content:'What would you like to do next? We can proceed with your order or cancel it.'
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
        content:'I cannot figure out what your message means.'
    });
}).then(function(){
    return botui.message.add({
        delay:3000,
        loading: true,
        content:'I feel your irritation because of this.'
    });
}).then(function(){
    return botui.message.add({
        delay:3000,
        loading: true,
        content:'Could you respond to the question again?'
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
        content:'I will process your request. Please hold on for a moment.'
    });
}).then(function(){
    return botui.message.add({
        delay:3000,
        loading: true,
        content:'I have processed your request. The issue is resolved.'
    });
}).then(function(){
    sendcomplete();
    return botui.message.add({
        delay:2000,
        loading: true,
        content:'Please contact us again if you need further assistance. Bye.'
    });
});

function sendcomplete(){
    window.parent.postMessage({"message": "completed","text1":response[0],"text2":response[1],"text3":response[2],"text4":response[3],"text5":response[4]}, "*");
};
