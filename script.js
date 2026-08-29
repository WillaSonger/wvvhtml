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

else if(type=="frequency"){
page.innerHTML=
`
<h2>
☑ 常用网址
</h2>
<a href="https://onetouch.alibaba.com/moBasedata/luyou/home/act/icbu_rules/index">
阿里公告更新
</a>
`;
}

else if(type=="zipzip"){
page.innerHTML=
`
<h2>
∞ 压缩网址
</h2>
<a href="https://ywange.com/tool">
 外贸人工具网
</a>
<a href="https://www.amz123.com/">
AMZ123
</a>
`;
}


}