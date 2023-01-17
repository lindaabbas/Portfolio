/**Change nav color */
let navbar =document.getElementById('navbar')
window.addEventListener('scroll',function(){
    if(window.scrollY >50){
        navbar.classList.add('new-bg-color');
        navbar.style.transition ='1s'
    }
    else{
        navbar.classList.remove('new-bg-color');
        navbar.style.transition ='1s'
    }
})

/**smooth scroll */
let links = document.querySelectorAll('nav a')
links.forEach(function(link){
    link.addEventListener('click',function(e){
        e.preventDefault()
        let currentId = e.target.attributes.href.value
        let sectionPos = document.querySelector(currentId).offsetTop
        window.scroll({
            top: sectionPos,
            behavior: 'smooth'
        })
    })
})

/**scroll to up */
document.querySelector('.top').style.opacity = '0'
window.addEventListener('scroll',function(){
    let aboutPos = this.document.getElementById('about').offsetTop
    if(window.scrollY > aboutPos){
        document.querySelector('.top').style.opacity = '1'
        document.querySelector('.top').style.transition = '.7s'
    }
    else{
        document.querySelector('.top').style.opacity = '0'
        document.querySelector('.top').style.transition = '.7s'
    }
})

let topbtn = document.querySelector('.top button')
topbtn.addEventListener('click',function(){
    window.scroll({
        top:0,
        behavior: 'smooth'
    })
})

//loading screen
let body = document.body
body.style.overflow = 'hidden'
document.querySelector('.loading').style.opacity ='1'
document.querySelector('.loading').style.visibility ='visible'
document.querySelector('.loading').style.transition ='.8s'

window.addEventListener('load',function(){
    setTimeout(function(){
        document.querySelector('.loading').style.opacity ='0'
        document.querySelector('.loading').style.visibility ='hidden'
        document.querySelector('.loading').style.transition ='.8s'
        body.style.overflow = 'auto'
    }, 1500);
})

//Theme color
$('.theme i').click(function(){
    let w = $('.options').outerWidth()
    let lft =$('.theme').offset().left
    if(lft == 0)
    $('.theme').animate({left:-w},1500)
    else
    $('.theme').animate({left:0},1500)
})


let colors= ["#5BC0F8","#658864","#58287F","#FBC252","#ff724c"]
for(let i=0 ; i<colors.length; i++){
    $('.options li').eq(i).css("backgroundColor",colors[i])
}

$('.options li').click(function(){
    let bg = $(this).css("backgroundColor")
    $('html').attr('style',`--main-color:${bg}`)
})