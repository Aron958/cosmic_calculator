import { Component, OnInit } from '@angular/core';

declare var $:any;

@Component({
  selector: 'app-szamologep',
  templateUrl: './szamologep.component.html',
  styleUrls: ['./szamologep.component.css']
})
export class SzamologepComponent implements OnInit {
  

  constructor() { }

  ngOnInit() {
    
    var testNumLength = function(number) {
      if (number.length > 11) {
          totaldiv.text(number.substr(number.length, 0 ,9));
          if (number.length > 11) {
              number = "";
              totaldiv.text("Error");
          }
      } 
  };

    let number:any = "";
    let newnumber = "";
    let operator = "";
    let totaldiv = $('#total');
    totaldiv.text("0");
    
    $("#egyenlo").click(function(){
     
      if (operator === "+"){
        number = (parseInt(number, 10) + parseInt(newnumber,10)).toString(10);
      } else if (operator === "-"){
        number = (parseInt(newnumber, 10) - parseInt(number,10)).toString(10);
      } else if (operator === "/"){
        number = (parseInt(newnumber, 10) / parseInt(number,10)).toString(10);
      } else if (operator === "X"){
        number = (parseInt(newnumber, 10) * parseInt(number,10)).toString(10);
      };

      totaldiv.text(number);
      testNumLength(number);
      });




    $(".numbers").not("#clear,#clearall").click(function(){
      number += $(this).text();
      totaldiv.text(number);
      testNumLength(number);
      });

      $(".operators").not("#egyenlo").click(function(){
        operator = $(this).text();
        newnumber = number;
        number = "";
        totaldiv.text("0");
        if (operator === "c2"){
          number = (parseInt(newnumber, 10) * parseInt(newnumber,10)).toString(10);
          totaldiv.text(number);
          testNumLength(number);
        } else if (operator === "%"){
          number = (parseInt(newnumber, 10) / 100);
          totaldiv.text(number);
          testNumLength(number);
        }

        });
      
      $("#clear,#clearall").click(function(){
        number = "";
        totaldiv.text("0");
        if ($(this).attr("id") === "clearall") {
          newnumber = "";
        }
        });
  }
  
}
