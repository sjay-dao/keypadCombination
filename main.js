$(document).ready(function(){
    let keys_count =0; //number of letters when combined together
    let lpk = 3; //letters per key
    let output_per_lpk_count = 1;
    let index_track = [];
    let index_key_selected = [];
    let arr_3_letters = [
     ['A','B','C'],
     ['D','E','F'],
     ['G','H','I'], 
     ["J","K","L"], 
     ["M","N","O"], 
     ["P","Q", "R","S"], 
     ["T","U","V"],
     ["W","X","Y","Z"]
    ];

    $( ".keys" ).click(function() {
         $("#result_text").text('Output:');  
        console.log(this.value + $(this).attr('arrangement'));
        $(this).prop("disabled", true);
        
        
        index_key_selected[keys_count] = $(this).attr("arrangement");
        
        output_per_lpk_count*= arr_3_letters[index_key_selected[keys_count]].length;

        console.log( "index_key_selected[keys_count] "+  index_key_selected[keys_count]);
        //sorting the key in ascending order and computing number of combinations
        for(x=0; x<index_key_selected.length; x++){
            // if(x+1 != index_key_selected.length)
                console.log("output_per_lpk_count" +output_per_lpk_count);
            for(y=x+1; y<index_key_selected.length; y++){
                if(index_key_selected[x] > index_key_selected[y]){     
                    let temp = index_key_selected[x];
                    index_key_selected[x] = index_key_selected[y];
                    index_key_selected[y] = temp;
                }
            }
        }

        keys_count++;
        // output_per_lpk_count = Math.pow(3, keys_count-1);
        
        //setting up index tracker
        for(i=0; i<keys_count; i++){
            index_track[i] = 0;
            console.log("index_track" + index_track[i]);
        }

        last_index = keys_count-1;
            for(y=0; y<parseInt(output_per_lpk_count); y++){
                
                // $("#result_text").val(res_str + " ");
                let let_comb = "";
                for(z=0; z<keys_count; z++){
                    res_str = $("#result_text").text();
                    let_comb = let_comb +arr_3_letters[index_key_selected[z]][index_track[z]];
                    $("#result_text").text(res_str + arr_3_letters[index_key_selected[z]][index_track[z]]);
                   
                }
                console.log(let_comb);
                $("#result_text").append(" ");
                index_track[last_index]++;
                console.log("index_track[last_index]" + index_track[last_index]);
                console.log(index_track[last_index] +">="+ arr_3_letters[index_key_selected[last_index]]);
                console.log("parseInt(index_track[last_index]) >= arr_3_letters[last_index].length" + parseInt(index_track[last_index]) >= arr_3_letters[index_key_selected[last_index]].length);
                    let read_ind_last = last_index;
                    for(i=0; i<keys_count; i++){//modifies the value in index tracker
                        if(index_track[read_ind_last-i] >= arr_3_letters[index_key_selected[last_index-i]].length){
                            index_track[read_ind_last-i] = 0;
                            index_track[read_ind_last-i-1]++;
                        }
                    }
            }

    });

    $("#clear").click(function(){
        console.log("cleared");
        $( ".keys" ).prop("disabled", false);
        $("#result_text").text(' ');
        keys_count = 0;
        output_per_lpk_count = 1;
        index_track = [];
        index_key_selected = [];
    });

})