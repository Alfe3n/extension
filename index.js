
let myLeads=[]
const text_input_el=document.getElementById("text_input")
const list_el=document.getElementById("list")
const save_btn_el=document.getElementById("save_btn")
const delete_btn_el=document.getElementById("delete_btn")
const savetab_btn_el=document.getElementById("savetab_btn")
const tabs=[]


savetab_btn_el.addEventListener("click",function(){
  chrome.tabs.query({currentWindow: true, active: true}, function(tabs){
    myLeads.push(tabs[0].url);
});
  localStorage.setItem("myLeads",JSON.stringify(myLeads))
  render(myLeads)
})

const leadsFromLocalStorage=JSON.parse(localStorage.getItem("myLeads"))
  if(leadsFromLocalStorage) 
    {
      myLeads=leadsFromLocalStorage
    render(myLeads) 

    
    }
    
function render(Leads){
  listItems=" "
  for(i=0;i<Leads.length;++i)
  listItems+=`
  <li>
      <a href='${Leads[i]}' target='_blank'>
        ${Leads[i]}
      </a>
  </li>
  `
  list_el.innerHTML=listItems
}
    delete_btn_el.addEventListener("click",function(){
      localStorage.clear()
      myLeads=[]
      render(myLeads)
    })

save_btn_el.addEventListener("click",function(){
  myLeads.push(text_input_el.value)
  text_input_el.value=" "
  localStorage.setItem("myLeads",JSON.stringify(myLeads))
  render(myLeads)
  
}
)

