const loadData=async()=>{
    const res=await fetch(' https://openapi.programming-hero.com/api/videos/categories');
    const data=await res.json();
    const datas=data.data
    console.log(datas);
    dataCon(datas)
    

}
const dataCon=(data)=>{
    const buttonContainer=document.getElementById('button-container');
    data.forEach(datas=>{
        // console.log(datas);
        const div=document.createElement('div');
        div.innerHTML=`
        <button onclick='buttonClick("${datas.category_id}")' class="btn btn-active btn-ghost hover:bg-[#FF1F3D]
        hover:text-white">${datas.category
        }</button>
        `
        buttonContainer.appendChild(div);
    })
    
}
const buttonClick=async(clickId)=>{
    console.log(clickId);
    const res=await fetch(`https://openapi.programming-hero.com/api/videos/category/${clickId}`);
    console.log(res);
    const data=await res.json();
    const datas=data.data;
    console.log(datas);
    showData(datas)
}
const showData=(datas)=>{
    const cardContainer=document.getElementById('card-container');
    cardContainer.innerHTML=''

  
    if(datas.length==0){
        const div=document.createElement('div');
        div.classList='justify-center text-center items-center '
        div.innerHTML=`
      <div >
      <img  src="./image/Icon.png" alt="">
      <p class="text-[32px] font-bold">Oops!! Sorry, There is no content here</p>
      </div>
        `
        cardContainer.appendChild(div)
        
    }

   

    datas.forEach(data=>{
        console.log(data);
      
        const div=document.createElement('div');
        div.classList=' gap-4'
        div.innerHTML=`
        <figure><img class="h-[200px] w-full rounded-xl"  src="${data?.thumbnail}" alt="Shoes" /></figure>
        <div class="flex gap-4  mt-2 ">
          <div>
          <img class="h-[40px] w-[40px] rounded-full"  src="${data?.authors?.[0]?.profile_picture}" alt="Shoes" />
            
          </div>
          <div>
            <p class="text-[16px] font-bold text-[#171717]">${data?.title
            }</p>
    
            <p class="inline">${data.authors[0].profile_name}<img class="w-5 inline" src="${data.authors[0].verified? "./image/verified.png" : ""}" alt="">


            <p class="text-[14px] text-[#171717b3]  font-normal">${data?.others
                ?.views} views</p>
          </div>
        
        </div>
        `
        cardContainer.appendChild(div)
            

        // let views=data.others.views.slice(0,3);
        // let sum=0
        // views.forEach(view=>{
        //     sum++
        //     return view;
        // })


    })
    
 
}
const blogClick=()=>{
    location.href="blog.html"
}


loadData()
buttonClick("1000")
// showData("01")
// dataCon("01")
