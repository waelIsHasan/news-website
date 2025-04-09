
export const endPoint = {
    everything :   "https://newsapi.org/v2/everything?q=bitcoin&apiKey=8f87dd79837644e7915357c55a095931",
    general : 'https://newsapi.org/v2/top-headlines?category=general&apiKey=8f87dd79837644e7915357c55a095931',
    tech : 'https://newsapi.org/v2/top-headlines?category=technology&apiKey=8f87dd79837644e7915357c55a095931',
    business : 'https://newsapi.org/v2/top-headlines?category=business&apiKey=8f87dd79837644e7915357c55a095931',
    entertainment : 'https://newsapi.org/v2/top-headlines?category=entertainment&apiKey=8f87dd79837644e7915357c55a095931',
    sports : 'https://newsapi.org/v2/top-headlines?category=sports&apiKey=8f87dd79837644e7915357c55a095931',
    science : 'https://newsapi.org/v2/top-headlines?category=science&apiKey=8f87dd79837644e7915357c55a095931',
    health : 'https://newsapi.org/v2/top-headlines?category=technology&apiKey=8f87dd79837644e7915357c55a095931',
}

//sports entertainment  health science  general technology business

export const headerBlockData = {
    doNotMiss : {
        name : "Do Not Miss",
        className : "do-not-miss",
        links : [{name : 'sports' , url : '/sports'} , {name : 'entertainment' , url : '/entertainment'} ,{name : 'health' , url : '/health'}]
    },
    toBeSmart : {
        name : "To Be Smart",
        className : "to-be-smart",
        links : [{name : 'science' , url : '/science'} , {name : 'technology' , url : '/tech'} ,{name : 'business' , url : '/business'}]
    }
}