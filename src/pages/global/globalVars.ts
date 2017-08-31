export var buInfo :any ={BUID : 0,BUName :''};
export var userInfo:any ={SGID:''};
export var yearList : any =[{ID:2015,Name:"2015"},{ID:2016,Name:"2016"},{ID:2017,Name:"2017"},{ID:2018,Name:"2018"},{ID:2019,Name:"2019"}];
export var businessUnitList=[
    {id:1,name:'CMA'},
    {id:3,name:'Adfors'},
    {id:5,name:'Sekruit'},      
    {id:10,name:'Mortars'},
    {id:11,name:'Pipe'}
  ];
export function getPlanningYear (){
    var currYear = new Date().getFullYear();
    var year :number[] = [];
    for(let i = 4 ;i>0;i--)
    {
      year.push(currYear-i);
    }
    for(let i =0 ;i< 6;i++)
    {
       year.push(currYear+i);
    }
    return year;
}

export function getMonthList(){
var monthList=[ {id:1,Name:"Jan"},{id:2,Name:"Feb"},{id:3,Name:"Mar"},{id:4,Name:"Apr"},
                {id:5,Name:"May"},{id:6,Name:"Jun"},{id:7,Name:"Jul"},{id:8,Name:"Aug"},
                {id:9,Name:"Sept"},{id:10,Name:"Oct"},{id:11,Name:"Nov"},{id:12,Name:"Dec"}];
   return monthList;             
}
export function JsonDateToDate (value) {
        if (String(value).indexOf("Date") > -1) {
            value = String(value).replace("/", "");
            value = String(value).replace("(", "");
            value = String(value).replace(")", "");
            value = String(value).replace("Date", "");
            value = String(value).replace("/", "");
            return new Date(parseFloat(value));
        }        
  return new Date(parseFloat(value))
}
export var avatarImgURL="http://whiteyellowpages.eworkplace.saint-gobain.com/Photos/SGID.jpg"
