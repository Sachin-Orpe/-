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

export var recentActivities=[{"ID":52170,"Activity":"Bruno Li Approved Investment Demand No.171100","ActivityDate":"3 hrs","Category":"InvestmentDemand","CategoryID":35802},{"ID":52153,"Activity":"Steven Parker Approved Investment Demand No.171105","ActivityDate":"10 hrs","Category":"InvestmentDemand","CategoryID":35842},{"ID":52152,"Activity":"James Wilson Approved Investment Demand No.171105","ActivityDate":"11 hrs","Category":"InvestmentDemand","CategoryID":35842},{"ID":52150,"Activity":"Dan Wiechec Approved Investment Demand No.170677","ActivityDate":"11 hrs","Category":"InvestmentDemand","CategoryID":7995},{"ID":52148,"Activity":"Jean-Michel Eudier Approved Investment Demand No.170677","ActivityDate":"11 hrs","Category":"InvestmentDemand","CategoryID":7995},{"ID":52145,"Activity":"Sergio Mazzoleni Approved Investment Demand No.170677","ActivityDate":"12 hrs","Category":"InvestmentDemand","CategoryID":7995},{"ID":52144,"Activity":"Stephane Nicolas Approved Investment Demand No.171104","ActivityDate":"13 hrs","Category":"InvestmentDemand","CategoryID":35829},{"ID":52133,"Activity":"Jean Yves RICHTER Approved Investment Demand No.170862","ActivityDate":"13 hrs","Category":"InvestmentDemand","CategoryID":20703},{"ID":52115,"Activity":"Philippe Geeraert Approved Investment Demand No.170862","ActivityDate":"14 hrs","Category":"InvestmentDemand","CategoryID":20703},{"ID":52113,"Activity":"Pierre Gramond Approved Investment Demand No.171104","ActivityDate":"14 hrs","Category":"InvestmentDemand","CategoryID":35829}];

export var announcementList=[
  {id:1,name:'The Capex+ team proposing mobile app for capex+ application...'} 
];