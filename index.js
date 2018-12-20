let customer = [];

function Henk(id,f_name,l_name){
    this.id = id;
    this.f_name= f_name;
    this.l_name=l_name;
}

function getValues() {

    let id = document.getElementById("id").value;
    let f_name = document.getElementById("f_name").value;
    let l_name = document.getElementById("l_name").value;

    h = new Henk(id,f_name,l_name);

    console.log(id);
    console.log(f_name);
    console.log(l_name);

    alert("Id: "+ h.id + " First: "+ h.f_name + " Last: "+ h.l_name);
    // let tmp = ("Id: "+ id + "First: "+ f_name + "Last: "+ l_name);
    let tmp = ("Id: "+ h.id + "\nFirst: "+ h.f_name + "\nLast: "+ h.l_name);
    console.log(tmp);
    customer.push(tmp)
}
    
function ne() {
    document.getElementById("id").value = "";
    document.getElementById("f_name").value = "";
    document.getElementById("l_name").value = "";
    console.log(customer);
}
function disp() {
    alert(customer);
}
