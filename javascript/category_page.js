let categories = document.getElementById("categorical");
let collapsed_heading = document.getElementById("collapse");
let search_icon = document.querySelector(".search")
let search_bar = document.getElementById("search_bar")
let navigation_box = document.querySelector("nav")
let icon_container = document.getElementById("search_cart")
let search_tool = document.getElementById("search_tool")
const mediaquery_phone = window.matchMedia("(max-width: 700px)")
const mediaquery_tablet = window.matchMedia("(max-width: 960px)")
const drop_down_nav = document.getElementById("three_bar_dropdown_icon")
const lower_heading = document.getElementById("lower_heading")
const announcement = document.getElementById("announcement")
const color = ["red","green","blue","purple"]
const element = document.getElementById("element")
const button = document.querySelectorAll(".link_container")
const right = document.querySelectorAll("#right")
const left = document.querySelectorAll("#left")
const fig_container = document.querySelectorAll(".fig_container")
const ratings = document.querySelector(".ratings")
const comment_container = document.querySelector(".comment_container")
const comment = document.querySelectorAll(".comment")
const read_more = document.getElementById("read_more_btn")
const customer_review = document.getElementById("customer_review")
const left_review = document.querySelector(".left_review")
const right_review = document.querySelector(".right_review")
const carousel_array =[`<div class="element">
                            <div class="text_box"></div>
                        </div>`, 
                        `<div class="element">
                            <div class="text_box"></div>
                        </div>`,
                        `<div class="element">
                            <div class="text_box"></div>
                        </div>`,
                        `<div class="element">
                            <div class="text_box"></div>
                        </div>`]


const review_list = document.querySelectorAll("#review")

const phone_collapsed = 
    `
    <div class="collapsed_categories">
        <div id="phone_categories" class="bar">
            <span>Categories</span>
            <span class="right_bar"></span>
        </div>
        <ul id="category_list">
        <li>
        <div class="name_bottom_border">
            <div class="category_name">
                <div>Genre</div>
                <div  class="bar">
                    <div class="right_bar"></div>
                </div>
            </div>
        
        </div>
        <ul class="list author">
            <li><a href="literature.html">Literature</a></li>
            <li><a href="Business.html">Business</a></li>
            <li><a href="literature.html">Comic</a></li>
            <li><a href="Business.html">Self-help</a></li>
            <li><a href="literature.html">Textbook</a></li>
            <li><a href="Business.html">Magazines</a></li>
            <li><a href="literature.html">Encyclopedia</a></li>
            <li><a href="Business.html">Sociology</a></li>
        </ul>
        </li>
        <li>
            <div class="name_bottom_border">
                <div class="category_name">
                    <div>Author</div>
                    <div class="bar">
                        <div class="right_bar"></div>
                    </div>
                </div>
            </div>
            <ul class="list author">
                <li><a href="literature.html">J.K.Rowling</a></li>
                <li><a href="Business.html">Marukami Haruki</a></li>
                <li><a href="literature.html">Napoleon Hill</a></li>
                <li><a href="Business.html">Peter Drucker</a></li>
                <li><a href="literature.html">Warren Buffett</a></li>
                <li><a href="Business.html">Alan Moore</a>  </li>
                <li><a href="literature.html">Oda Eiichiro</a> </li>
            </ul>
        </li>
        <li>
            <div class="name_bottom_border">
                <div class="category_name">
                    <div>Country</div>
                    <div class="bar">
                        <div class="right_bar"></div>
                    </div>
            </div>
            </div>
            <ul class="list">
                <li><a href="literature.html">America</a></li>
                <li><a href="Business.html">British</a></li>
                <li><a href="literature.html">France</a></li>
                <li><a href="Business.html">Germany</a></li>
                <li><a href="literature.html">Japan</a></li>
            </ul>
        
        </li>
        <li>
            <div class="name_bottom_border">
                <div class="category_name">
                    <div>Format</div>
                    <div class="bar">
                        <div class="right_bar"></div>
                    </div>
                </div>
            </div>
            <ul class="list">
                <li><a href="literature.html">Hardcover</a></li>
                <li><a href="Business.html">Paperback</a></li>
                <li><a href="literature.html">Audiobook</a></li>
                <li><a href="Business.html">Ebook</a></li>
            </ul>
        </li>
    </ul>
    
    </div>
    `

  
function tablet_media_query(x){
    if (x.matches){
        drop_down_nav.addEventListener("mouseover", function(){
            lower_heading.style.display="flex"
        })
        
        lower_heading.addEventListener("mouseleave",function(){
            lower_heading.style.display="none"}) 
    }
    else {
        lower_heading.style.display="flex"
        lower_heading.addEventListener("mouseleave",function(){
            lower_heading.style.display="flex"}) 
    }
}
function media_query(x){
    if (x.matches){
        collapsed_heading.style.display="none"
        categories.innerHTML=phone_collapsed
        let phone_categories = document.getElementById("phone_categories")
        let category_list = document.getElementById("category_list")
        let list=document.querySelectorAll(".list")
        
        let bottom_line =document.querySelectorAll(".name_bottom_border")
        phone_categories.addEventListener("mouseover",function(){
            category_list.style.display="flex"
        })
        category_list.addEventListener("mouseenter",function(){
            category_list.style.display="flex"
        })
        category_list.addEventListener("mouseleave",function(){
            category_list.style.display="none"
        })
        for (let i = 0; i<list.length; i++){
            bottom_line[i].addEventListener("click", function(){
                let list_display_mode = window.getComputedStyle(list[i]).getPropertyValue("display")
                if (list_display_mode=="none"){
                    list[i].style.display="block"
                    
                    bottom_line[i].style.borderBottom="2px solid rgb(228, 206, 179)"
                    bottom_line[i].style.paddingTop="5px"
                    bottom_line[i].style.paddingBottom="5px"
                }
                else {
                    list[i].style.display="none"
                    bottom_line[i].style.border="none"
                    bottom_line[i].style.paddingTop="0"
                    bottom_line[i].style.paddingBottom="0"
                }
                
            })}
       
       }
       

    else{
        categories.innerHTML=`<div id="phone_categories" class="bar">
                                <span>Categories</span>
                                <span class="right_bar"></span>
                                </div>`
        
        
        
        
        
        
        
        let phone_categories = document.getElementById("phone_categories")
        phone_categories.addEventListener("mouseover",function(){
            collapsed_heading.style.display="grid"
        })
        collapsed_heading.addEventListener("mouseenter",function(){
            collapsed_heading.style.display="grid"
        })
        collapsed_heading.addEventListener("mouseleave",function(){
            collapsed_heading.style.display="none"
        })
        
        
    }}

media_query(mediaquery_phone)

mediaquery_phone.addEventListener("change", media_query)
tablet_media_query(mediaquery_tablet)

mediaquery_tablet.addEventListener("change", tablet_media_query)


for (let i=0; i<right.length; i++){
    right[i].addEventListener("click",function(){
        if (i==2){
            ratings.scrollBy({
                top: 0,
                left: 50,
                behavior: "smooth"
            })
            comment_container.scrollBy({
                top: 0,
                left: 50,
                behavior: "smooth"
            })
        }
        else {
            fig_container[i].scrollBy({
                top: 0,
                left: 50,
                behavior: "smooth"
            })
        }
    })
    left[i].addEventListener("click",function(){
        if (i==2){
            ratings.scrollBy({
                top: 0,
                left: -50,
                behavior: "smooth"
            })
            comment_container.scrollBy({
                top: 0,
                left: -50,
                behavior: "smooth"
            })
        }
        else {
            fig_container[i].scrollBy({
                top: 0,
                left: -50,
                behavior: "smooth"
            })
        }
    })
}







