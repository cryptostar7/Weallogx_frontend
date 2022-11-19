export default function getSortName(string){
    var name = ''; 
    var arr = string.split(' ');
    arr.forEach(element => {
        name += element.split('')[0];
    });
    return name.toUpperCase();
}