function showContent(type){


let page=document.getElementById("page");



if(type=="drawing"){


page.innerHTML=

`
<h2>
🎨 绘画教程
</h2>

<a href="网址1">
绘画教程1
</a>


<a href="网址2">
绘画教程2
</a>


<a href="网址3">
绘画教程3
</a>

`;

}



else if(type=="coding"){


page.innerHTML=

`

<h2>
💻 编程学习
</h2>


<a href="网址1">
学习编程1
</a>


<a href="网址2">
学习编程2
</a>


`;

}



else if(type=="english"){


page.innerHTML=

`

<h2>
🌎 英语学习
</h2>


<a href="网址1">
英语网站1
</a>


`;

}



}