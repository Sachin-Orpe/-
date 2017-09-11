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

export var recentActivities=[{"ID":744,"Activity":"Atul CHAVAN Approved Investment Demand No.170115","ActivityDate":"42 days","Category":"InvestmentDemand","CategoryID":289},{"ID":743,"Activity":"Shailesh MIRAJKAR Approved Investment Demand No.170115","ActivityDate":"42 days","Category":"InvestmentDemand","CategoryID":289},{"ID":742,"Activity":"Gautam Shanbhag Approved Investment Demand No.170115","ActivityDate":"42 days","Category":"InvestmentDemand","CategoryID":289},{"ID":741,"Activity":"Vikas PANDEY Approved Investment Demand No.170115","ActivityDate":"42 days","Category":"InvestmentDemand","CategoryID":289},{"ID":740,"Activity":"Atul CHAVAN Approved Investment Demand No.170114","ActivityDate":"42 days","Category":"InvestmentDemand","CategoryID":288},{"ID":739,"Activity":"Pramod Kolte Approved Investment Demand No.170114","ActivityDate":"42 days","Category":"InvestmentDemand","CategoryID":288},{"ID":738,"Activity":"Gautam Shanbhag Approved Investment Demand No.170114","ActivityDate":"42 days","Category":"InvestmentDemand","CategoryID":288},{"ID":737,"Activity":"Vikas PANDEY Approved Investment Demand No.170114","ActivityDate":"42 days","Category":"InvestmentDemand","CategoryID":288},{"ID":736,"Activity":"Atul CHAVAN Re-submitted Investment Demand No.170113","ActivityDate":"42 days","Category":"InvestmentDemand","CategoryID":287},{"ID":735,"Activity":"Atul CHAVAN Approved Investment Demand No.170113","ActivityDate":"42 days","Category":"InvestmentDemand","CategoryID":287}];

export var announcementList=[
  {id:1,name:'This is the first announcement for investment demand.'},
  {id:3,name:'This is the second announcement for investment demand.'}
];