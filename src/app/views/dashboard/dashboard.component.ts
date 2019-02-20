import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { getStyle, hexToRgba } from '@coreui/coreui/dist/js/coreui-utilities';
import { CustomTooltips } from '@coreui/coreui-plugin-chartjs-custom-tooltips';
import { ApiService } from '../../services/api.services';
import { Product } from '../../services/product';
import { isNgTemplate } from '@angular/compiler';
import { BaseChartDirective } from 'ng2-charts';
import { CloudData, CloudOptions } from 'angular-tag-cloud-module';
import { WordCloud } from '../../services/worldcould';
@Component({
  templateUrl: 'dashboard.component.html'
})
export class DashboardComponent implements OnInit {
  single: any[]=[];
   
  ageGroupColors: [
    {name: '2017-11', value: '#5AA454'}
  ];
  multi: any[];

  view: any[] = [700, 400];

  // options
  showXAxis = true;
  showYAxis = true;
  gradient = false;
  showLegend = true;
  showXAxisLabel = true;
  xAxisLabel = 'Year-Month';
  showYAxisLabel = true;
  yAxisLabel = 'Sentiment';

  colorScheme = {
    domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA']
  };

  options: CloudOptions = {
    // if width is between 0 and 1 it will be set to the size of the upper element multiplied by the value 
    width : 1000,
    height : 400,
    overflow: false,
  };
 
  cloudData: CloudData[] = [
    { text: 'Weight-8', weight: 8 },
    // HTML-Element will have class 10 as 10 is the max. value in strict mode:
    { text: 'Weight-12 -> Weight-10', weight: 12 },
    // HTML-Element will have class 1 as 1 is the min. value in strict mode:
    { text: 'Weight-0 -> Weight-1', weight: 0 },
    // HTML-Element will have class 4 as floats are rounded to an int in strict mode:
    { text: 'Weight-4.3 -> Weight-4', weight: 4.3 },
    // ...
  ];


  selectedChannel: string = 'Amazon';
  data: Product[] = [];
  wordCloudresult:WordCloud[]=[];
  @ViewChild('baseChart') chart:BaseChartDirective;

  // lineChart1
  public lineChart1Data: Array<any> = [
    {
      data: [65, 59, 84, 84, 51, 55, 40],
      label: 'Series A'
    }
  ];
  public lineChart1Labels: Array<any> = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
  public lineChart1Options: any = {
    tooltips: {
      enabled: false,
      custom: CustomTooltips
    },
    maintainAspectRatio: false,
    scales: {
      xAxes: [{
        gridLines: {
          color: 'transparent',
          zeroLineColor: 'transparent'
        },
        ticks: {
          fontSize: 2,
          fontColor: 'transparent',
        }

      }],
      yAxes: [{
        display: false,
        ticks: {
          display: false,
          min: 40 - 5,
          max: 84 + 5,
        }
      }],
    },
    elements: {
      line: {
        borderWidth: 1
      },
      point: {
        radius: 4,
        hitRadius: 10,
        hoverRadius: 4,
      },
    },
    legend: {
      display: false
    }
  };
  public lineChart1Colours: Array<any> = [
    {
      backgroundColor: getStyle('--primary'),
      borderColor: 'rgba(255,255,255,.55)'
    }
  ];
  public lineChart1Legend = false;
  public lineChart1Type = 'line';

  // lineChart2
  public lineChart2Data: Array<any> = [
    {
      data: [1, 18, 9, 17, 34, 22, 11],
      label: 'Series A'
    }
  ];
  public lineChart2Labels: Array<any> = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
  public lineChart2Options: any = {
    tooltips: {
      enabled: false,
      custom: CustomTooltips
    },
    maintainAspectRatio: false,
    scales: {
      xAxes: [{
        gridLines: {
          color: 'transparent',
          zeroLineColor: 'transparent'
        },
        ticks: {
          fontSize: 2,
          fontColor: 'transparent',
        }

      }],
      yAxes: [{
        display: false,
        ticks: {
          display: false,
          min: 1 - 5,
          max: 34 + 5,
        }
      }],
    },
    elements: {
      line: {
        tension: 0.00001,
        borderWidth: 1
      },
      point: {
        radius: 4,
        hitRadius: 10,
        hoverRadius: 4,
      },
    },
    legend: {
      display: false
    }
  };
  public lineChart2Colours: Array<any> = [
    { // grey
      backgroundColor: getStyle('--info'),
      borderColor: 'rgba(255,255,255,.55)'
    }
  ];
  public lineChart2Legend = false;
  public lineChart2Type = 'line';


  // lineChart3
  public lineChart3Data: Array<any> = [
    {
      data: [78, 81, 80, 45, 34, 12, 40],
      label: 'Series A'
    }
  ];
  public lineChart3Labels: Array<any> = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
  public lineChart3Options: any = {
    tooltips: {
      enabled: false,
      custom: CustomTooltips
    },
    maintainAspectRatio: false,
    scales: {
      xAxes: [{
        display: false
      }],
      yAxes: [{
        display: false
      }]
    },
    elements: {
      line: {
        borderWidth: 2
      },
      point: {
        radius: 0,
        hitRadius: 10,
        hoverRadius: 4,
      },
    },
    legend: {
      display: false
    }
  };
  public lineChart3Colours: Array<any> = [
    {
      backgroundColor: 'rgba(255,255,255,.2)',
      borderColor: 'rgba(255,255,255,.55)',
    }
  ];
  public lineChart3Legend = false;
  public lineChart3Type = 'line';


  // barChart1
  public barChart1Data: Array<any> = [
    {
      data: [78, 81, 80, 45, 34, 12, 40, 78, 81, 80, 45, 34, 12, 40, 12, 40],
      label: 'Series A'
    }
  ];
  public barChart1Labels: Array<any> = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16'];
  public barChart1Options: any = {
    tooltips: {
      enabled: false,
      custom: CustomTooltips
    },
    maintainAspectRatio: false,
    scales: {
      xAxes: [{
        display: false,
        barPercentage: 0.6,
      }],
      yAxes: [{
        display: false
      }]
    },
    legend: {
      display: false
    }
  };
  public barChart1Colours: Array<any> = [
    {
      backgroundColor: 'rgba(255,255,255,.3)',
      borderWidth: 0
    }
  ];
  public barChart1Legend = false;
  public barChart1Type = 'bar';

  // mainChart

  public mainChartElements = 12;
  public mainChartData1: Array<number> = [];
  public mainChartData2: Array<number> = [];
  public mainChartData3: Array<number> = [];

  public mainChartData: Array<any> = [
    {
      data: this.mainChartData1,
      label: '2019'
    },
    {
      data: this.mainChartData2,
      label: '2018'
    },
    {
      data: this.mainChartData3,
      label: '2017'
    }
  ];
  /* tslint:disable:max-line-length */
  public mainChartLabels: Array<any> = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday', 'Monday', 'Thursday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
  /* tslint:enable:max-line-length */
  public mainChartOptions: any = {
    tooltips: {
      enabled: true,
      custom: CustomTooltips,
      intersect: false,
      mode: 'index',
      position: 'nearest',
      callbacks: {
        labelColor: function(tooltipItem, chart) {
          return { backgroundColor: chart.data.datasets[tooltipItem.datasetIndex].borderColor };
        }
      }
    },
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      xAxes: [{
        gridLines: {
          drawOnChartArea: false,
        },
        ticks: {
          callback: function(value: any) {
            //return value.charAt(0);
            return value;
          }
        }
      }],
      yAxes: [{
        ticks: {
          beginAtZero: true,
          maxTicksLimit: 5,
          stepSize: Math.ceil(100 / 5),
          max: 100
        }
      }]
    },
    elements: {
      line: {
        borderWidth: 2
      },
      point: {
        radius: 0,
        hitRadius: 10,
        hoverRadius: 4,
        hoverBorderWidth: 3,
      }
    },
    legend: {
      display: false
    }
  };
  public mainChartColours: Array<any> = [
    { // brandInfo
      backgroundColor: hexToRgba(getStyle('--info'), 10),
      borderColor: getStyle('--info'),
      pointHoverBackgroundColor: '#fff'
    },
    { // brandSuccess
      backgroundColor: 'transparent',
      borderColor: getStyle('--success'),
      pointHoverBackgroundColor: '#fff'
    },
    { // brandDanger
      backgroundColor: 'transparent',
      borderColor: getStyle('--danger'),
      pointHoverBackgroundColor: '#fff',
      borderWidth: 1,
      borderDash: [8, 5]
    }
  ];
  public mainChartLegend = false;
  public mainChartType = 'line';

  // social box charts

  public brandBoxChartData1: Array<any> = [
    {
      data: [65, 59, 84, 84, 51, 55, 40],
      label: 'Facebook'
    }
  ];
  public brandBoxChartData2: Array<any> = [
    {
      data: [1, 13, 9, 17, 34, 41, 38],
      label: 'Twitter'
    }
  ];
  public brandBoxChartData3: Array<any> = [
    {
      data: [78, 81, 80, 45, 34, 12, 40],
      label: 'LinkedIn'
    }
  ];
  public brandBoxChartData4: Array<any> = [
    {
      data: [35, 23, 56, 22, 97, 23, 64],
      label: 'Google+'
    }
  ];

  public brandBoxChartLabels: Array<any> = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
  public brandBoxChartOptions: any = {
    tooltips: {
      enabled: false,
      custom: CustomTooltips
    },
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      xAxes: [{
        display: false,
      }],
      yAxes: [{
        display: false,
      }]
    },
    elements: {
      line: {
        borderWidth: 2
      },
      point: {
        radius: 0,
        hitRadius: 10,
        hoverRadius: 4,
        hoverBorderWidth: 3,
      }
    },
    legend: {
      display: false
    }
  };
  public brandBoxChartColours: Array<any> = [
    {
      backgroundColor: 'rgba(255,255,255,.1)',
      borderColor: 'rgba(255,255,255,.55)',
      pointHoverBackgroundColor: '#fff'
    }
  ];
  public brandBoxChartLegend = false;
  public brandBoxChartType = 'line';

  public random(min: number, max: number) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }
  constructor(private api: ApiService){
    //Object.assign(this, { single:this.single });
    
  }
  ngOnInit(): void {
   
 
    // generate random values for mainChart
    this.api.getProducts(this.selectedChannel)
      .subscribe(res => {
        this.data = res;
        this.single=[{"name":"2019-1","series":[{"name":"Lazada","value":"59.64"}]},{"name":"2019-2","series":[{"name":"Lazada","value":"66.26"}]}];
        

        
        //this.mainChartLabels=this.data.filter(item=>item.year==='2018').map(item=>item.month);
        this.mainChartLabels= ['January', 'February', 'March', 'April', 'May', 'June', 'July','August','September','Octobor','November','December'];
        
        this.fillChartDataForYear("2017",this.mainChartData3);
        this.fillChartDataForYear("2019",this.mainChartData1);
        this.fillChartDataForYear("2018",this.mainChartData2);
        
      }, err => {
        console.log(err);
       // this.isLoadingResults = false;
      });

      this.api.getWorldCould()
      .subscribe(res => {
        this.cloudData=res;
        console.log(this.wordCloudresult);
       /*this.wordCloudresult.forEach(item=>{
          this.cloudData.push({"text":item.product,"weight":item.count });
        });*/
       

        
        //this.mainChartLabels=this.data.filter(item=>item.year==='2018').map(item=>item.month);
        
        
      }, err => {
        console.log(err);
       // this.isLoadingResults = false;
      });

    /*for (let i = 0; i <= this.mainChartElements; i++) {
      this.mainChartData1.push(this.random(50, 200));
      this.mainChartData2.push(this.random(80, 100));
      this.mainChartData3.push(65);
    }*/
  }
  private fillChartDataForYear(year:string,chartData:any){
    
    if (this.data.filter(item=>item.year===year).length>0){
    let monthCounter=1;
    for (let monthCounter = 1; monthCounter <= 12; monthCounter++) 
    {
      let item:any=this.data.filter(item=>item.year===year && item.month===monthCounter.toString());
      
      if (item.length>0) chartData.push(((item[0] as Product).sentiment*100).toFixed(2));
      else
        chartData.push(0);
      
    }
   
  }
  else
  {
     console.log("clearing the chart for year"+year); 
     chartData=[];
     
  }
  }
  changeChannel(event:any){
    this.api.getProducts(this.selectedChannel)
    .subscribe(res => {
      //this.mainChartLabels=[];
      this.data = res;
      console.log(this.data);
      //this.mainChartLabels=this.data.filter(item=>item.year==='2018').map(item=>item.month);
      //this.chart.data=[];
      //this.chart.chart = 0;
     
      
      this.single=[];

      this.mainChartLabels= ['January', 'February', 'March', 'April', 'May', 'June', 'July','August','September','Octobor','November','December'];
      this.data.forEach(item=>{
        let myItem:any=this.single.filter(item=>item.name===item.year+"-"+item.month);
        if (myItem.length>0)
        {
          myItem.value.push({"name":item.channel,value:(item.sentiment*100).toFixed(2)});
          this.single.push({"name":item.year+"-"+item.month,"series": myItem.value});
         
         
        }
        else
          this.single.push({"name":item.year+"-"+item.month,"series":[{"name":item.channel,"value": (item.sentiment*100).toFixed(2)}]});

       });
       console.log( JSON.stringify(this.single));

      /*this.fillChartDataForYear("2017",this.mainChartData3);
      this.fillChartDataForYear("2019",this.mainChartData1);
      this.fillChartDataForYear("2018",this.mainChartData2);*/
 // this.chart.datasets=this.mainChartData;
    
      
    }, err => {
      console.log(err);
     // this.isLoadingResults = false;
    });
  }

}
