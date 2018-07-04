$( function() {
    var url='http://159.65.151.126:3200/api/company/all';
    var company = [];
    //var cmpy = json.stringify(company);
    // $.ajax({
    //     type: 'GET',
    //     url: url,
    //     success: function(data){
    //         //console.log(data);
    //         // var len = data.length;
    //         // for(var i=0;i<len;i++){
    //         //     company.push(data[i].companyName, data[i].webUrl);    
    //         // }       
    //         $.each(data, function(key, value){
    //             company.push([value.companyName]);              
    //             console.log(key, value.companyName, value.webUrl);
    //         })     
    //         $( "#autoComp" ).autocomplete({
    //             source: company
    //         });
    //         // $( "#autoComp" ).autocomplete(function( ul, item ) {
    //         //     return $( "<li>" )
    //         //       .append( "<div>" + value.companyName + "<br>" + value.webUrl + "</div>" )
    //         //       .appendTo( ul );
    //         //   });            
    //     }        
    // });
    // console.log(company);    
    // $('.ui-menu-item div').find('<span>').replaceWith("<span/>");
  });