$(document).ready(function(){


    $('.form').hide();
    $('.input').hide();
    $('.fa-check').hide();
    
    let toggleClasses = () => {
        $('.li').each(function(index) {$(this).on('click', event => { 
                                
                                  $(event.currentTarget).find('.fa-check').toggle();	
                                  $(event.currentTarget).toggleClass('bleu verte');
                                  $(event.currentTarget).stopPropagation();
                 
    });})
    }
    
    $('.add').on('click', () =>{
        $('.form').toggle();
        

   })

    /*$('.input').on('click', event => {
        if ($(event.currentTarget).attr('checked'))
        {
            $(event.currentTarget).parent().css('background-color','#28ffd7');
        }
        else {
            $(event.currentTarget).parent().css('background-color','#65ef56');
        }

    })
    */

    $('.add-new-task-button').on('click', ()=> {

        $('ul').append( "<li class='li verte'>  <i type='checkbox' class='fa fa-check fa-2x input'> </i>" + $('.add-new-task').val() + "<i class='fa fa-trash fa-2x remove'></i></li>").children().on('click', event => { 
                                 
                                  $(event.currentTarget).find('.fa-check').toggle();
                                  $(event.currentTarget).toggleClass('bleu verte');
                                  $(event.currentTarget).stopPropagation();
                                  
            
                 
    });
       $('.remove').on('click', event =>{
            $(event.currentTarget).parent().hide();
         })


    })

    

    $('.remove').on('click', event =>{
        $(event.currentTarget).parent().hide();
    })

    


toggleClasses();

})
