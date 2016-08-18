jQuery(function(){
     window.index = lunr(function(){
        this.field('id'),
        this.field('title', {boost: 10});
        this.field('excerpt');
        this.ref('id');
    });

    //downoad the data from the json file w generated
    window.data = $.getJSON('/data/search-results.json');

    //将生成的json数据添加到lunr索引
    window.data.then(function(loaded_data){
        $.each(loaded_data, function(index, value){
            //console.log(index);
            //console.log('value is::::::' + value['url']);
            window.index.add($.extend({"id": index}, value));
        });
    });

    $("#site_search").submit(search_article);

    function search_article(event){
    //alert("hello");
    event.preventDefault();
    //console.log('this is here')
    var search_data = document.getElementById("search_box").value;
    //alert(search_data);
    console.log(search_data);
    var results = window.index.search(search_data);
    //alert(results.length);
    window.data.then(function(loaded_data){
        div_data = document.getElementById("search_result");
        
        if (results.length){
            results.forEach(function(result) {
                div_data.innerHTML = '';
                var item = loaded_data[result.ref];
                console.log(item);
                //alert(result.ref)
                var appendString = '<li><a href="' + item.url + '">' + item.title + '</a></li>';
                console.log(appendString);
                //alert (div_data.innerHTML)
                div_data.innerHTML = appendString;
            });
        }else{
            div_data.innerHTML = '<li>No results found</li>';
        }
        
    });
    
}

});

/*
function search_article(){
    //alert("hello");
    
    var search_data = document.getElementById("search_box").value;
    //alert(search_data);
    console.log(search_data);
    var results = window.index.search(search_data);
    //alert(results.length);
    div_data = document.getElementById("search_result")
    div_data.innerHTML = "";   //
    results.forEach(function(result) {
            //var item = loaded_data[result.ref];
            //alert(result.ref)
            
            var appendString = '<ul><li><a href="' + result.ref + '">' + result.title + '</a></li></ul>';
            //alert (div_data.innerHTML)
            div_data.innerHTML = appendString;
            // Build a snippet of HTML for this result
            //var appendString = '<li><a href="' + item.url + '">' + item.title + '</a></li>';
            // Add it to the results
            //$search_results.append(appendString);
    });
}
*/