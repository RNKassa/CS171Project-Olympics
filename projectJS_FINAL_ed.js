// Defining SVG dimensions

margin = {
    top: 50,
    right: 50,
    bottom: 10,
    left: 100
};

width = 1510;
height = 840;



// Defining GDP/Capita and Total Medal Graph Dimensions

graph_x_value = 790;
graph_width_scale = 1
graph_height_scale = 1

GDP_graph_x_value = graph_x_value;
GDP_graph_width = 600 * graph_width_scale;
GDP_graph_top_height = 90 * graph_height_scale;
GDP_graph_base_height = (GDP_graph_top_height + 245) * graph_height_scale;

total_medal_x_value = graph_x_value;
total_medal_width = 600 * graph_width_scale;
total_medal_top_height = (GDP_graph_base_height + 30);
total_medal_base_height = (total_medal_top_height + 245) * graph_height_scale;


// Draw SVG

svg = d3.select("#vis").append("svg")
    .attr({
        width: width,
        height: height - 150
    })
    .attr("class", "svg")
    .append("g").attr({
        transform: "translate(" + margin.left + "," + margin.top + ")"
    })
    .attr("class", "frame");


map = d3.select("svg").append("g")
    .append("g").attr({
        transform: "translate(-255, -180)"
    })
    .attr("class", "mapframe");

var color = d3.scale.category10();
var projection = d3.geo.mercator().scale(130).translate([650, 600]); //.precision(.1);
var path = d3.geo.path().projection(projection);

//creates World Map
var initVis = function (error, world) {
    d3.json("./data/world_data.json", function (error, data) {
        world = data;
        var woMap = world.features
        map.append("g").attr("transform", "translate(0,-0)")
            .attr("class", "country")
            .selectAll("path")
            .data(woMap)
            .enter()
            .append("path")
            .attr("class", function () {
                country_name = countryNameExceptions(countryName(this.__data__.properties.name));
                return "path " + country_name
            })
            .attr("d", path);

    })
};

//initializes world map
initVis();

// Draw axes titles

svg.append("text")
    .attr("class", "permlabel")
    .attr("text-anchor", "start")
    .attr("transform", "translate(" +
        (GDP_graph_x_value + 422) + "," + (total_medal_base_height + 11) + ")")
    .text("Country Medal Rankings (Total Medals)");


svg.append("text")
    .attr("class", "permlabel2")
    .attr("text-anchor", "end")
    .attr("transform", "translate(" + (total_medal_x_value - 38) + "," + total_medal_top_height + ") rotate(-90)")
    .text("Total Medal Count");

svg.append("text")
    .attr("class", "permlabel2")
    .attr("text-anchor", "end")
    .attr("transform", "translate(" + (GDP_graph_x_value - 38) + "," + GDP_graph_top_height + ") rotate(-90)")
    .text("Total Medal Count");


// Draw graph and info background framing rectangles

data_rect = svg.datum(1).append("rect")
    .attr("width", "640px")
    .attr("height", "100px")
    .attr("class", "data_rect")
    .attr("fill", "#3c3c3c")
    .attr("transform", "translate(" + (total_medal_x_value - 40) + ",-45)");

data_rect = svg.datum(1).append("rect")
    .attr("width", GDP_graph_width + 70)
    .attr("height", total_medal_base_height - GDP_graph_top_height + 40)
    .attr("class", "GDP_background")
    .attr("fill", "#3c3c3c")
    .attr("transform", "translate(" + (GDP_graph_x_value - 55) + "," + (GDP_graph_top_height - 25) + ")");



// Prepare data before visualization update function

summerOlympics_arr = [];
winterOlympics_arr = [];
summerHost_arr = [];
winterHost_arr = [];

var currentinfo;

d3.json("./data/olympicData.json", function (error, data) {
    d3.json("./data/HostCities.json", function (error, data2) {
        for(var key in data) {
            year_str = "";
            for(var i = 0; i < 5; i++) {
                year_str = year_str + key[i];
            }
            if(year_str > 1880) {
                if(key.indexOf("Summer") != -1) {

                    for(var i = 0; i < data2.length; i++) {
                        if(data2[i].OlympicYears === key) {
                            var currentinfo = data2[i].HostCity
                        }
                    }

                    summerHost_arr.push(key + " - " + currentinfo)
                    summerOlympics_arr.push(key);
                } else {
                    for(var i = 0; i < data2.length; i++) {
                        if(data2[i].OlympicYears === key) {
                            var currentinfo = data2[i].HostCity
                        }
                    }
                    winterHost_arr.push(key + " - " + currentinfo)
                    winterOlympics_arr.push(key);
                }
            }
        }
        summerOlympics_arr.sort();
        winterOlympics_arr.sort();
        summerHost_arr.sort();
        winterHost_arr.sort();

    });
});


// Changes the slider when the "Summer Olympics"
// radio button is selected. 

d3.selectAll(".SummerOlympics")
    .on("change", function (d) {
        $(".SummerOlympics").attr("checked", "checked");
        $('#defaultslide').slider({
            max: 26,
            value: 0,
            slide: function (e, ui) {
                $('#currentval').html(summerHost_arr[ui.value]);
                updateEverything(summerOlympics_arr[ui.value])
            }
        });
        $(".WinterOlympics").attr("checked", null);
        updateEverything("1896 Summer Olympics");
        $('#currentval').html("1896 Summer Olympics - Athens, Greece");
    });


// Changes the slider when the "Winter Olympics"
// radio button is selected.  

d3.selectAll(".WinterOlympics")
    .on("change", function (d) {
        $(".WinterOlympics").attr("checked", "checked");
        $('#defaultslide').slider({
            max: 19,
            value: 0,
            slide: function (e, ui) {
                $('#currentval').html(winterHost_arr[ui.value]);
                updateEverything(winterOlympics_arr[ui.value])
            }
        });
        $(".SummerOlympics").attr("checked", null);
        updateEverything("1924 Winter Olympics");
        $('#currentval').html("1924 Winter Olympics - Chamonix, France");
    });


// Initially defines the slider (because radio buttons do not register
// a "change" even if initially checked)

$(function () {
    $('#defaultslide').slider({
        max: 26,
        min: 0,
        value: 0,
        slide: function (e, ui) {
            $('#currentval').html(summerHost_arr[ui.value]);
            updateEverything(summerOlympics_arr[ui.value])
        }
    });
});

// Creates the first graph
updateEverything("1896 Summer Olympics");
$('#currentval').html("1896 Summer Olympics - Athens, Greece");

	svg.append("text")
		.attr("class", "permlabel")
		.attr("text-anchor", "start")
		.attr("transform", "translate(" + 
			(GDP_graph_x_value + 422) + "," 
			+ (total_medal_base_height + 11) + ")")
		.text("Country Medal Rankings (Total Medals)");
		
	
	svg.append("text")
		.attr("class", "permlabel2")
		.attr("text-anchor", "end")
		.attr("transform", "translate(" + (total_medal_x_value - 38) + "," + total_medal_top_height + ") rotate(-90)")
		.text("Total Medal Count");
	
	svg.append("text")
		.attr("class", "permlabel2")
		.attr("text-anchor", "end")
		.attr("transform", "translate(" + (GDP_graph_x_value - 38) + "," + GDP_graph_top_height + ") rotate(-90)")
		.text("Total Medal Count");


selected_country = "";


// Updates the graphs

function updateEverything(olympicYear) {
    d3.json("./data/olympicData.json", function (error, data) {

        d3.json("./data/populationData.json", function (error, population) {

            d3.json("./data/GDP_Data.json", function (error, GDP) {

                d3.json("./data/summerOlympicsData.json", function (error, summer) {

                    d3.json("./data/winterData.json", function (error, winter) {

                        d3.json("./data/olympicsBlurbs.json", function (error, blurb) {

                            // Format data with exceptions
                            dataExceptions(data);

                            // Create array used for coloring using 2008 Summer Olympics data
                            color_arr = [];

                            for(var key in data["2008 Summer Olympics"]) {
                                year = 2008;
                                name = countryNameExceptions(countryName(key));
                                new_name = tipsyClassExceptions(name, year);
                                color_arr.push(new_name);

                            }


                            // Define year of Olympics
                            year = "";
                            for(var i = 0; i < 4; i++) {
                                year = year + olympicYear[i];
                            }


                            // Remove then redraw "Data Not Available" text when data isn't available

                            d3.select(".notavailable").remove();;

                            if(year < 1960) {
                                svg.append("text")
                                    .attr("class", "notavailable")
                                    .attr("text-anchor", "start")
                                    .attr("transform", "translate(" +
                                        (graph_x_value + 50) + "," + (GDP_graph_top_height + (GDP_graph_base_height -
                                            GDP_graph_top_height) * (1 / 2)) + ")")
                                    .html("<tspan style='font-weight: bold;'>GDP/Capita Data Begins in 1960</tspan> ");
                            }

                            // Color all path elements, while keeping selected country yellow

                            d3.selectAll("path").attr("fill", function (d) {
                                if(this.__data__.properties != undefined) {
                                    if(this.id == "present1") {
                                        return "#FFFF00"
                                    }
                                    country_name = countryNameExceptions(countryName(this.__data__.properties.name))
                                    new_name = tipsyClassExceptions(country_name, year);
                                } else {
                                    new_name = "randoom"
                                }
                                return countryColor(new_name, color_arr);
                            });

                            if(d3.selectAll("#black")["0"]["0"] != undefined) {
                                if(d3.selectAll("#black")["0"].length != 1) {
                                    selected_country = countryNameExceptions(countryName(d3.selectAll("#black")["0"]["0"]["__data__"][
                                        "Country"]))
                                };
                            }

                            // Data manipulation to prepare data array

                            counter = 0;
                            hold_str = ""

                            if(olympicYear.indexOf("Winter") != -1) {
                                for(var key in winter) {
                                    counter1 = 0;
                                    if(winter[key][year] > 0) {
                                        for(var key2 in data[olympicYear]) {
                                            x = countryNameExceptions(countryName(winter[key]["Country"]));
                                            y = countryNameExceptions(countryName(key2))
                                            if(x == y) {
                                                counter1 = 1;
                                            }
                                        }
                                        if(counter1 == 0) {
                                            hold_str = hold_str + ' "' + countryNameExceptions(countryName(winter[key]["Country"] +
                                                '",'));
                                        }
                                    }
                                    counter++;
                                }
                            } else {
                                for(var key in summer) {
                                    counter1 = 0;
                                    if(summer[key][year] > 0) {
                                        for(var key2 in data[olympicYear]) {
                                            x = countryNameExceptions(countryName(summer[key]["Nation"]));
                                            y = countryNameExceptions(countryName(key2))
                                            if(x == y) {
                                                counter1 = 1;
                                            }
                                        }
                                        if(counter1 == 0) {
                                            hold_str = hold_str + ' "' + countryNameExceptions(countryName(summer[key]["Nation"] + '",'))
                                        }
                                    }
                                    counter++;
                                }
                            }

                            // resets selected countries
                            d3.selectAll(".path").attr("opacity", ".15")
                            d3.selectAll("#present").attr("id", null)

                            // Removes the previous graph, if any exists
                            svg.selectAll(".bars").data([]).exit().remove();
                            svg.selectAll(".circles").data([]).exit().remove();
                            svg.selectAll(".axis").data([]).exit().remove();
                            svg.selectAll(".tooltip").data([]).exit().remove();
                            svg.selectAll(".circlesholder").data([]).exit().remove();
                            svg.selectAll(".barsholder").data([]).exit().remove();
                            d3.selectAll(".present").attr("class", function (d) {
                                newClass = ""
                                for(var i = 0; i < ($(this).attr("class").length - 8); i++) {
                                    newClass = newClass + $(this).attr("class")[i]
                                }
                                return newClass;
                            })

                            map.selectAll("path").attr("class", function () {
                                value = -1;
                                if($(this).attr("id") != undefined) {
                                    value = $(this).attr("id").indexOf("present1");
                                }
                                if(value == -1) {
                                    country_name = countryNameExceptions(countryName(this.__data__.properties.name));
                                    new_name = tipsyClassExceptions(country_name, year);
                                    if(country_name != new_name) {
                                        return "path " + new_name
                                    } else {
                                        return "path " + country_name
                                    }
                                } else {
                                    return $(this).attr("class")
                                }
                            })
                            num_of_olympics = 0;
                            for(var key in data) {
                                num_of_olympics++;
                            }
                            year = olympicYear[0] + olympicYear[1] + olympicYear[2] + olympicYear[3];


                            // Measures the max number of medals in total_medal_max,
                            // the number of countries in the Olympics that year in length
                            // and places overall object into an array of objects (data_arr) as needed by d3
                            var total_medal_max = 0;
                            var population_max = 0;
                            var GDP_max = 0;
                            var length = 0;
                            var data_arr = [];
                            for(var key in data[olympicYear]) {
                                name = countryNameExceptions(countryName(key));
                                new_name = tipsyClassExceptions(name, year);
                                if(name != new_name) {
                                    continue;
                                }
                                if(parseInt(data[olympicYear][key]["Total"]) > total_medal_max) {
                                    total_medal_max = parseInt(data[olympicYear][key]["Total"]);
                                }
                                length++;
                                data[olympicYear][key]["Country"] = key;
                                for(var key2 in population) {
                                    if(countryNameExceptions(countryName(population[key2]["Country Name"])) == countryNameExceptions(
                                        countryName(key))) {
                                        if(population[key2][year] > population_max) {
                                            population_max = population[key2][year]
                                        }
                                        data[olympicYear][key]["Population"] = population[key2][year]
                                    }
                                }
                                for(var key3 in GDP) {
                                    if(countryNameExceptions(countryName(GDP[key3]["Country Name"])) == countryNameExceptions(
                                        countryName(key))) {
                                        if(GDP[key3][year] > GDP_max) {
                                            GDP_max = GDP[key3][year]
                                        }
                                        data[olympicYear][key]["GDP"] = GDP[key3][year]
                                    }
                                }
                                data[olympicYear][key]["Year"] = year;
                                if(data[olympicYear][key] != olympicYear) {
                                    data_arr.push(data[olympicYear][key]);
                                }

                            }

                            for(var i = 1; i <= data_arr.length; i++) {
                                if(data_arr[i - 2] != undefined) {
                                    if(data_arr[i - 2]["Total"] == data_arr[i - 1]["Total"]) {
                                        data_arr[i - 1]["Rank"] = data_arr[i - 2]["Rank"];
                                    }
                                }
                                if(data_arr[i - 1]["Rank"] == undefined) {
                                    if(i == 1) {
                                        data_arr[i - 1]["Rank"] = "1st"
                                    } else if(i == 2) {
                                        data_arr[i - 1]["Rank"] = "2nd"
                                    } else if(i == 3) {
                                        data_arr[i - 1]["Rank"] = "3rd"
                                    } else {
                                        if(data_arr[i - 2]["Rank"].length == 3) {
                                            data_arr[i - 1]["Rank"] = (parseInt(data_arr[i - 2]["Rank"][0]) + 1) + "th";
                                        } else if(data_arr[i - 2]["Rank"].length == 4) {
                                            data_arr[i - 1]["Rank"] = (parseInt(data_arr[i - 2]["Rank"][0] + data_arr[i - 2]["Rank"][1]) +
                                                1) + "th";
                                        } else if(data_arr[i - 2]["Rank"].length == 5) {
                                            data_arr[i - 1]["Rank"] = (parseInt(data_arr[i - 2]["Rank"][0] + data_arr[i - 2]["Rank"][1] +
                                                data_arr[i - 2]["Rank"][2]) + 1) + "th";
                                        }
                                    }
                                }
                            }

                            for(var key in data[olympicYear]) {
                                if(key != "Year") {
                                    name = countryNameExceptions(countryName(key));
                                    new_name = tipsyClassExceptions(name, year);
                                    if(name != new_name) {
                                        d3.selectAll("." + new_name).attr("id", "present");
                                    } else {
                                        d3.selectAll("." + name).attr("id", "present");
                                    }
                                }
                            }

                            data_arr.sort(data_arrSort);


                            // Prepare all scales necessary for graphs

                            var x = d3.scale.linear()
                                .domain([0, length - 1])
                                .range([total_medal_x_value, total_medal_x_value + total_medal_width]);

                            var y = d3.scale.linear()
                                .domain([-2, 115])
                                .range([total_medal_base_height, total_medal_top_height]);

                            var y_winter = d3.scale.linear()
                                .domain([-2, 40])
                                .range([total_medal_base_height, total_medal_top_height]);

                            var y_max = d3.scale.linear()
                                .domain([-2, total_medal_max])
                                .range([total_medal_base_height, total_medal_top_height]);

                            var x_circles = d3.scale.linear()
                                .domain([0, length - 1])
                                .range([GDP_graph_x_value, GDP_graph_x_value + GDP_graph_width]);

                            var y_circles = d3.scale.linear()
                                .domain([0, 115])
                                .range([GDP_graph_base_height, GDP_graph_top_height]);

                            var y_winter_circles = d3.scale.linear()
                                .domain([0, 40])
                                .range([GDP_graph_base_height, GDP_graph_top_height]);

                            var y_max_circles = d3.scale.linear()
                                .domain([0, total_medal_max])
                                .range([GDP_graph_base_height, GDP_graph_top_height]);

                            // Scale used for rectangle creation, with winter and max variations

                            var y_bar = d3.scale.linear()
                                .domain([-2, 115])
                                .range([0, total_medal_base_height - total_medal_top_height]);

                            var y_bar_winter = d3.scale.linear()
                                .domain([-2, 40])
                                .range([0, total_medal_base_height - total_medal_top_height]);

                            var y_bar_max = d3.scale.linear()
                                .domain([-2, total_medal_max])
                                .range([0, total_medal_base_height - total_medal_top_height]);

                            var y_bar_circles = d3.scale.linear()
                                .domain([0, total_medal_max])
                                .range([0, GDP_graph_base_height - GDP_graph_top_height]);

                            var y_bar_winter_circles = d3.scale.linear()
                                .domain([0, 40])
                                .range([0, GDP_graph_base_height - GDP_graph_top_height]);

                            var y_bar_max_circles = d3.scale.linear()
                                .domain([0, total_medal_max])
                                .range([0, GDP_graph_base_height - GDP_graph_top_height]);

                            var xAxis = d3.svg.axis().scale(x).orient("bottom");

                            var yAxis = d3.svg.axis()
                                .scale(y)
                                .orient("left");

                            var yAxis_winter = d3.svg.axis()
                                .scale(y_winter)
                                .orient("left");

                            var yAxis_max = d3.svg.axis(5)
                                .scale(y_max)
                                .orient("left");

                            var yAxis_circles = d3.svg.axis()
                                .scale(y_circles)
                                .orient("left");

                            var yAxis_winter_circles = d3.svg.axis()
                                .scale(y_winter_circles)
                                .orient("left");

                            var yAxis_max_circles = d3.svg.axis()
                                .scale(y_max_circles)
                                .orient("left");

                            var x_GDP = d3.scale.linear()
                                .domain([0, GDP_max])
                                .range([GDP_graph_x_value, GDP_graph_x_value + GDP_graph_width]);

                            var x_pop = d3.scale.linear()
                                .domain([0, population_max])
                                .range([GDP_graph_x_value, GDP_graph_x_value + GDP_graph_width]);

                            var xAxis_GDP = d3.svg.axis().scale(x_GDP).orient("bottom").ticks(6);

                            var xAxis_pop = d3.svg.axis().scale(x_pop).orient("bottom").ticks(6);


                            // Draws the GDP/Capita or population graphs depending on the radio button selected

                            if($('#GDP').is(':checked')) {
                                drawGDPcircles(data_arr, xAxis_GDP, olympicYear, GDP_max, population_max, total_medal_max,
                                    xAxis_GDP, yAxis_winter_circles, yAxis_circles, yAxis_max_circles, x_GDP, x_pop, xAxis_GDP,
                                    xAxis_pop, y_bar_circles, y_bar_winter_circles, y_bar_max_circles, year);
                            }
                            if($('#POP').is(':checked')) {
                                drawPOPcircles(data_arr, xAxis_GDP, olympicYear, GDP_max, population_max, total_medal_max,
                                    xAxis_GDP, yAxis_winter_circles, yAxis_circles, yAxis_max_circles, x_GDP, x_pop, xAxis_GDP,
                                    xAxis_pop, y_bar_circles, y_bar_winter_circles, y_bar_max_circles, year);
                            }

                            // Redraws the GDP/Capita graph when the respective radio button is selected

                            d3.selectAll("#GDP")
                                .on("change", function (d) {
                                    d3.select("#POP").attr("checked", undefined);
                                    d3.select("#GDP").attr("checked", "checked");
                                    svg.selectAll(".circles").data([]).exit().remove();
                                    svg.selectAll(".circleholder").data([]).exit().remove();
                                    svg.selectAll(".xpopaxis").data([]).exit().remove();
                                    svg.selectAll(".ypopaxis").data([]).exit().remove();
                                    drawGDPcircles(data_arr, xAxis_GDP, olympicYear, GDP_max, population_max, total_medal_max,
                                        xAxis_GDP, yAxis_winter_circles, yAxis_circles, yAxis_max_circles, x_GDP, x_pop, xAxis_GDP,
                                        xAxis_pop, y_bar_circles, y_bar_winter_circles, y_bar_max_circles, year);

                                    svg.selectAll(".circles")
                                        .on("mouseover", function (d, i) {
                                            mouseOver(d, color_arr)
                                        })
                                        .on("mouseout", function (d, i) {
                                            mouseOut(d, color_arr)
                                        })
                                        .on("click", function (d) {
                                            countryClick(d, color_arr, year)
                                        });

                                    $(".circles").tipsy({
                                        gravity: 'se',
                                        html: true,
                                        title: function () {
                                            var d = this.__data__;
                                            return d["Country"] + "<br/>GDP: $" + populationString(Math.round(d["GDP"])) +
                                                "<br/>Total Medals: " + d["Total"];
                                        }
                                    });
                                });

                            // Redraws the population graph when the respective radio button is selected

                            d3.selectAll("#POP")
                                .on("change", function (d) {
                                    d3.select("#GDP").attr("checked", undefined);
                                    d3.select("#POP").attr("checked", "checked");
                                    svg.selectAll(".circles").data([]).exit().remove();
                                    svg.selectAll(".circleholder").data([]).exit().remove();
                                    svg.selectAll(".xgdpaxis").data([]).exit().remove();
                                    svg.selectAll(".ygdpaxis").data([]).exit().remove();
                                    drawPOPcircles(data_arr, xAxis_GDP, olympicYear, GDP_max, population_max, total_medal_max,
                                        xAxis_GDP, yAxis_winter_circles, yAxis_circles, yAxis_max_circles, x_GDP, x_pop, xAxis_GDP,
                                        xAxis_pop, y_bar_circles, y_bar_winter_circles, y_bar_max_circles, year);

                                    svg.selectAll(".circles")
                                        .on("mouseover", function (d, i) {
                                            mouseOver(d, color_arr)
                                        })
                                        .on("mouseout", function (d, i) {
                                            mouseOut(d, color_arr)
                                        })
                                        .on("click", function (d) {
                                            countryClick(d, color_arr, year)
                                        });

                                    $(".circles").tipsy({
                                        gravity: 'se',
                                        html: true,
                                        title: function () {
                                            var d = this.__data__;
                                            return d["Country"] + "<br/>Population: " + populationString(Math.round(d[
                                                "Population"])) + "<br/>Total Medals: " + d["Total"];
                                        }
                                    });
                                });

                            // Draws axes based on if it is a Winter Olympics or if it is a 
                            // Summer Olympics with a country that had more than 115 medals

                            if(olympicYear.indexOf("Winter") != -1) {
                                svg.append("g")
                                    .attr("class", "y axis")
                                    .attr("transform", "translate(" + (total_medal_x_value - 3) + ",0)")
                                    .call(yAxis_winter)
                            } else if(total_medal_max < 115) {
                                svg.append("g")
                                    .attr("class", "y axis")
                                    .attr("transform", "translate(" + (total_medal_x_value - 3) + ",0)")
                                    .call(yAxis)
                            } else {
                                svg.append("g")
                                    .attr("class", "y axis")
                                    .attr("transform", "translate(" + (total_medal_x_value - 3) + ",0)")
                                    .call(yAxis_max)
                            }

                            // Draws bars of total_medal graph

                            var bar = svg.selectAll(".frame")
                                .data(data_arr)
                                .enter()
                                .append("g")
                                .attr("class", "barsholder")
                                .attr("transform", function (d, i) {
                                    // varies the x_position of the graph bars based on variable width
                                    // (see next section)
                                    if(10 * length > total_medal_width) {
                                        return "translate(" + x(i) + "," + (total_medal_base_height) + ")";
                                    } else {
                                        return "translate(" + (total_medal_x_value + 10 * i) + "," + (total_medal_base_height) +
                                            ")";
                                    }
                                });

                            bar.append("rect")
                                .attr("width", function (d, i) {
                                    // varies the width of the rectangles based on the number
                                    // of countries, using 9 as a default if using that width
                                    // does not extend past the intended with of the graph
                                    if(9 > (total_medal_width) / length - 0.5) {
                                        return(total_medal_width) / length - 0.5
                                    } else {
                                        return 9
                                    }
                                })
                                .attr("height", function (d, i) {
                                    if(olympicYear.indexOf("Winter") != -1) {
                                        return y_bar_winter(d["Total"])
                                    } else if(total_medal_max > 115) {
                                        return y_bar_max(d["Total"])
                                    } else {
                                        return y_bar(d["Total"])
                                    }
                                })
                                .attr("fill", "#AFDCEC")
                                .attr("y", function (d) {
                                    if(olympicYear.indexOf("Winter") != -1) {
                                        return -y_bar_winter(d["Total"])
                                    } else if(total_medal_max > 115) {
                                        return -y_bar_max(d["Total"])
                                    } else {
                                        return -y_bar(d["Total"])
                                    }
                                })
                                .attr("class", function (d) {
                                    class_string = countryNameExceptions(countryName(d["Country"]))
                                    tipsyClassExceptions(class_string);
                                    return "bars " + class_string
                                })

                            svg.selectAll(".circles")
                                .on("mouseover", function (d, i) {
                                    mouseOver(d, color_arr)
                                })
                                .on("mouseout", function (d, i) {
                                    mouseOut(d, color_arr)
                                })
                                .on("click", function (d) {
                                    countryClick(d, color_arr, year)
                                });

                            svg.selectAll(".bars")
                                .on("mouseover", function (d, i) {
                                    mouseOver(d, color_arr)
                                })
                                .on("mouseout", function (d, i) {
                                    mouseOut(d, color_arr)
                                })
                                .on("click", function (d) {
                                    countryClick(d, color_arr, year)
                                });

                            // On hover functions using tipsy.js from
                            // http://onehackoranother.com/projects/jquery/tipsy/

                            $(".circles").tipsy({
                                gravity: 'se',
                                html: true,
                                title: function () {
                                    var d = this.__data__;
                                    return tipsyNameExceptions(d["Country"]) + "<br/>GDP: $" + populationString(Math.round(d["GDP"])) +
                                        "<br/>Total Medals: " + d["Total"];
                                }
                            });

                            $(".bars").tipsy({
                                gravity: 'se',
                                html: true,
                                title: function () {
                                    var d = this.__data__;
                                    return tipsyNameExceptions(d["Country"]) + "<br/>Rank: " + d["Rank"] + "<br/>Total Medals: " +
                                        d["Total"];
                                }
                            });

                            d3.selectAll("#present")
                                .attr("class", function (d) {
                                    if($(this).attr("class").indexOf("present") == -1) {
                                        return $(this).attr("class") + " present";
                                    } else return $(this).attr("class")
                                });


                            $(".present").tipsy({
                                gravity: 'se',
                                html: true,
                                title: function () {
                                    if(this != undefined) {
                                        var d = countryNameExceptions(countryName(this.__data__.properties.name));
                                        if(d3.selectAll("." + d)["0"]["1"] == undefined) {
                                            d = $(this).attr("class").split(" ")[1];
                                        }
                                        if(d3.selectAll("." + d)["0"]["1"] != undefined) {
                                            var name = d3.selectAll("." + d)["0"]["1"]["__data__"]["Country"];
                                            var newname = tipsyNameExceptions(name, d3.selectAll("." + d)["0"]["1"]["__data__"][
                                                "Year"]);
                                            if(name != newname) {
                                                newSelector = countryNameExceptions(countryName(newname));
                                                var newGold = d3.selectAll("." + newSelector)["0"]["1"]["__data__"]["Gold"];
                                                var newSilver = d3.selectAll("." + newSelector)["0"]["1"]["__data__"]["Silver"];
                                                var newBronze = d3.selectAll("." + newSelector)["0"]["1"]["__data__"]["Bronze"];
                                                return newname + '<br/>Gold: ' + newGold + '<br/>Silver: ' + newSilver +
                                                    '<br/>Bronze: ' + newBronze;
                                            } else {
                                                var gold = d3.selectAll("." + d)["0"]["1"]["__data__"]["Gold"];
                                                var silver = d3.selectAll("." + d)["0"]["1"]["__data__"]["Silver"];
                                                var bronze = d3.selectAll("." + d)["0"]["1"]["__data__"]["Bronze"];
                                                if(name == undefined) {
                                                    return
                                                }
                                                return name + '<br/>Gold: ' + gold + '<br/>Silver: ' + silver + '<br/>Bronze: ' +
                                                    bronze;
                                            }
                                        } else {
                                            d3.select(".tipsy").attr("visibility", "hidden");
                                            return
                                        }
                                    } else {
                                        d3.select(".tipsy").attr("visibility", "hidden");
                                        return
                                    }
                                }
                            });

                            // Defines mouseout, mouseover, and click actions that occur with
                            // path elements

                            map.selectAll("path")
                                .on("mouseover", function () {
                                    if(this.id.indexOf("present") != -1) {
                                        d3.select(this).attr("fill", "#FFFF00")
                                        country_name = countryNameExceptions(countryName(this.__data__.properties.name))
                                        new_name = tipsyClassExceptions(country_name, year);
                                        d3.selectAll("." + new_name)
                                            .attr("fill", "#FFFF00")
                                    }

                                    if($(".tipsy-inner")["0"] != undefined) {
                                        if($(".tipsy-inner")["0"].innerHTML == "undefined") {
                                            $(".tipsy").css("visibility", "hidden");
                                        }
                                    }
                                })
                                .on("mouseout", function () {
                                    d3.select(this).attr("fill", function () {
                                        d = $(this).attr("class").split(" ")[1];
                                        return countryColor(d, color_arr);
                                    })
                                    if(this.id.indexOf("present") != -1) {
                                        country_name = countryNameExceptions(countryName(this.__data__.properties.name))
                                        new_name = tipsyClassExceptions(country_name, year);
                                        d3.selectAll("." + new_name)
                                            .attr("fill", function (d, i) {
                                                if(this.id == "present1") {
                                                    return "#FFFF00"
                                                } else if(this.id == "black") {
                                                    return "#FFFF00"
                                                } else if(this.classList.contains("path")) {
                                                    d = $(this).attr("class").split(" ")[1];
                                                    return countryColor(d, color_arr);
                                                } else return "#AFDCEC"
                                            })
                                    }
                                })
                                .on("click", function () {
                                    name_hold = $(this).attr("class").split(" ")[1];
                                    if(d3.selectAll("." + name_hold)["0"].length > 2) {
                                        $(".medalimages").css("visibility", "visible");
                                        $("#informationrect").remove();
                                    }
                                    previous_name = "";
                                    if(d3.selectAll("#present1")["0"]["0"] != undefined) {
                                        previous_name = tipsyClassExceptions(countryNameExceptions(countryName(d3.selectAll(
                                            "#present1")["0"]["0"]["__data__"]["properties"]["name"])), year);
                                    }
                                    if(this.id.indexOf("present") != -1 && name_hold != previous_name) {
                                        new_name_hold = d3.selectAll("." + name_hold)["0"]["1"]["__data__"]["Country"]
                                        d3.selectAll("#present1")
                                            .attr("id", function (d) {
                                                if(previous_name != "") {
                                                    if(d3.selectAll("." + previous_name)["0"]["1"] != undefined && (d3.selectAll(
                                                        "." + previous_name)["0"]["1"].localName == "rect" || d3.selectAll(
                                                        "." + previous_name)["0"]["0"].localName == "rect")) {
                                                        return "present"
                                                    }
                                                } else return null
                                            })
                                            .attr("fill", function (d) {
                                                d = $(this).attr("class").split(" ")[1];
                                                return countryColor(d, color_arr)
                                            });
                                        d3.selectAll("#black")
                                            .attr("id", null);
                                        d3.selectAll(".circles")
                                            .attr("fill", "#AFDCEC")
                                            .attr("r", function (d) {
                                                if($('#GDP').is(':checked')) {
                                                    if(d["GDP"] != undefined) {
                                                        return 4
                                                    };
                                                }
                                                if($('#POP').is(':checked')) {
                                                    if(d["Population"] != undefined) {
                                                        return 4
                                                    };
                                                }
                                            });
                                        d3.selectAll(".bars")
                                            .attr("fill", "#AFDCEC");
                                        country_name = countryNameExceptions(countryName(this.__data__.properties.name));
                                        new_name = tipsyClassExceptions(country_name, year);
                                        d3.selectAll("." + new_name)
                                            .attr("id", function () {
                                                if(this.id == "present") {
                                                    return "present1"
                                                } else return "black"
                                            })
                                            .attr("fill", "#FFFF00");
                                        d3.selectAll("circle." + new_name)
                                        d3.selectAll("circle." + new_name)
                                            .attr("r", function (d) {
                                                if($('#GDP').is(':checked')) {
                                                    if(d["GDP"] != undefined) {
                                                        return 10
                                                    };
                                                }
                                                if($('#POP').is(':checked')) {
                                                    if(d["Population"] != undefined) {
                                                        return 10
                                                    };
                                                }
                                            });
                                        d3.selectAll("#present1")["0"]["0"]["__data__"]["properties"]["realname"] = new_name_hold
                                        d3.selectAll(".clicked").remove();
                                        svg.append("text")
                                            .attr("class", "clicked")
                                            .attr("id", "clicked1")
                                            .attr("font", "sans-serif")
                                            .attr("text-anchor", "start")
                                            .attr("transform", "translate(" +
                                                (graph_x_value - 30) + ",-20)")
                                            .html(tipsyNameExceptions(new_name_hold, year));
                                        svg.append("text")
                                            .attr("class", "clicked")
                                            .attr("id", "clicked2")
                                            .attr("font", "sans-serif")
                                            .attr("text-anchor", "start")
                                            .attr("transform", "translate(" +
                                                (graph_x_value - 20) + ",-2)")
                                            .html("<tspan style='font-weight: bold;'>Rank:</tspan> " + d3.selectAll("." + new_name)[
                                                "0"]["1"]["__data__"]["Rank"]);
                                        svg.append("text")
                                            .attr("class", "clicked")
                                            .attr("id", "clicked3")
                                            .attr("font", "sans-serif")
                                            .attr("text-anchor", "start")
                                            .attr("transform", "translate(" +
                                                (graph_x_value + 230) + ",-3)")
                                            .html("<tspan style='font-weight: bold;'>Gold:</tspan> " + d3.selectAll("." + new_name)[
                                                "0"]["1"]["__data__"]["Gold"]);
                                        svg.append("text")
                                            .attr("class", "clicked")
                                            .attr("id", "clicked4")
                                            .attr("text-anchor", "start")
                                            .attr("transform", "translate(" +
                                                (graph_x_value + 380) + ",-3)")
                                            .html("<tspan style='font-weight: bold;'>Silver:</tspan> " + d3.selectAll("." +
                                                new_name)["0"]["1"]["__data__"]["Silver"]);
                                        svg.append("text")
                                            .attr("class", "clicked")
                                            .attr("id", "clicked5")
                                            .attr("text-anchor", "start")
                                            .attr("transform", "translate(" +
                                                (graph_x_value + 530) + ",-3)")
                                            .html("<tspan style='font-weight: bold;'>Bronze:</tspan> " + d3.selectAll("." +
                                                new_name)["0"]["1"]["__data__"]["Bronze"]);
                                        svg.append("text")
                                            .attr("class", "clicked")
                                            .attr("id", "clicked6")
                                            .attr("text-anchor", "start")
                                            .attr("transform", "translate(" +
                                                (graph_x_value - 20) + ",16)")
                                            .html("<tspan style='font-weight: bold;'>Total Medals:</tspan> " + d3.selectAll("." +
                                                new_name)["0"]["1"]["__data__"]["Total"]);
                                        svg.append("text")
                                            .attr("class", "clicked")
                                            .attr("id", "clicked8")
                                            .attr("text-anchor", "start")
                                            .attr("transform", "translate(" +
                                                (graph_x_value - 20) + ",34)")
                                            .html(function () {
                                                if(d3.selectAll("." + new_name)["0"]["1"]["__data__"]["GDP"] != undefined) {
                                                    return "<tspan style='font-weight: bold;'>GDP/Capita: $</tspan>" +
                                                        populationString(Math.round(d3.selectAll("." + new_name)["0"]["1"][
                                                            "__data__"]["GDP"]))
                                                } else {
                                                    return "<tspan style='font-weight: bold;'>GDP/Capita: </tspan>no data"
                                                }
                                            })
                                        svg.append("text")
                                            .attr("class", "clicked")
                                            .attr("id", "clicked9")
                                            .attr("text-anchor", "start")
                                            .attr("transform", "translate(" +
                                                (graph_x_value - 20) + ",51)")
                                            .html(function () {
                                                if(d3.selectAll("." + new_name)["0"]["1"]["__data__"]["Population"] !=
                                                    undefined) {
                                                    return "<tspan style='font-weight: bold;'>Population: </tspan>" +
                                                        populationString(Math.round(d3.selectAll("." + new_name)["0"]["1"][
                                                            "__data__"]["Population"]))
                                                } else {
                                                    return "<tspan style='font-weight: bold;'>Population: </tspan>no data"
                                                }
                                            })
                                        svg.append("text")
                                            .attr("class", "clicked")
                                            .attr("id", "clicked7")
                                            .attr("text-anchor", "start")
                                            .attr("transform", "translate(" +
                                                (graph_x_value - 10) + ",20)")
                                            .html("");
                                    }
                                })

                            // Accounts for any country previous selected and maintains class
                            // through updated function

                            d3.selectAll("#present1")
                                .attr("class", function (d) {
                                    if($(this).attr("class").indexOf("present1") == -1) {
                                        return $(this).attr("class") + " present1";
                                    } else return $(this).attr("class")
                                });

                            $("#present1").tipsy({
                                gravity: 'se',
                                html: true,
                                title: function () {
                                    var d = this.__data__.properties.name;
                                    return 'Country Name: ' + d["Country"] + '<br/>Gold: ' + d["Gold"] + '<br/>Silver: ' + d[
                                        "Silver"] + '<br/>Bronze: ' + d["Bronze"];
                                }
                            });

                            if(selected_country != "") {
                                selected_country_obj = {};
                                selected_country_obj["Country"] = selected_country;
                                countryClick(selected_country_obj, color_arr, year);
                            }

                            if(d3.selectAll("#present1")["0"].length >= 1) {
                                if(d3.selectAll("#present1")["0"].length > 1) {
                                    for(var i = 0; i < d3.selectAll("#present1")["0"].length; i++) {
                                        if(d3.selectAll("#present1")["0"][i].__data__.properties.name.indexOf("Russia") != -1) {
                                            new_name = "Russia"
                                        } else if(d3.selectAll("#present1")["0"][i].__data__.properties.name.indexOf("Soviet") != -1) {
                                            new_name = "Russia"
                                        } else if(d3.selectAll("#present1")["0"][i].__data__.properties.name.indexOf("China") != -1) {
                                            new_name = "China"
                                        } else if(d3.selectAll("#present1")["0"][i].__data__.properties.name.indexOf("Czech") != -1) {
                                            new_name = "Czechoslovakia"
                                        } else if(d3.selectAll("#present1")["0"][i].__data__.properties.name.indexOf("Yugo") != -1) {
                                            new_name = "Yugoslavia"
                                        }
                                    }
                                } else {
                                    country_name = countryNameExceptions(countryName(d3.selectAll("#present1")["0"]["0"]["__data__"][
                                        "properties"]["name"]));
                                    new_name = tipsyClassExceptions(country_name, year);
                                }
                                if(d3.selectAll("." + new_name)["0"]["1"] != undefined && (d3.selectAll("." + new_name)["0"]["1"].localName ==
                                    "rect" || d3.selectAll("." + new_name)["0"]["0"].localName == "rect")) {
                                    new_name_hold = tipsyNameExceptions(d3.selectAll("." + new_name)["0"]["1"]["__data__"]["Country"],
                                        year);
                                    d3.selectAll("#present1")["0"]["0"]["__data__"]["properties"]["realname"] = new_name_hold
                                    d3.select("#clicked1")
                                        .html(new_name_hold);
                                    d3.select("#clicked2")
                                        .html("<tspan style='font-weight: bold;'>Rank:</tspan> " + d3.selectAll("." + new_name)["0"][
                                            "1"]["__data__"]["Rank"]);
                                    d3.select("#clicked3")
                                        .html("<tspan style='font-weight: bold;'>Gold:</tspan> " + d3.selectAll("." + new_name)["0"][
                                            "1"]["__data__"]["Gold"]);
                                    d3.select("#clicked4")
                                        .html("<tspan style='font-weight: bold;'>Silver:</tspan> " + d3.selectAll("." + new_name)["0"][
                                            "1"]["__data__"]["Silver"]);
                                    d3.select("#clicked5")
                                        .html("<tspan style='font-weight: bold;'>Bronze:</tspan> " + d3.selectAll("." + new_name)["0"][
                                            "1"]["__data__"]["Bronze"]);
                                    d3.select("#clicked6")
                                        .html("<tspan style='font-weight: bold;'>Total:</tspan> " + d3.selectAll("." + new_name)["0"][
                                            "1"]["__data__"]["Total"]);
                                    if(d3.selectAll("." + new_name)["0"]["1"]["__data__"]["GDP"] != undefined) {
                                        d3.select("#clicked8")
                                            .html("<tspan style='font-weight: bold;'>GDP/Capita: $</tspan>" + populationString(Math.round(
                                                d3.selectAll("." + new_name)["0"]["1"]["__data__"]["GDP"])));
                                    } else {
                                        d3.select("#clicked8")
                                            .html("<tspan style='font-weight: bold;'>GDP/Capita: </tspan>no data");
                                    }
                                    if(d3.selectAll("." + new_name)["0"]["1"]["__data__"]["Population"] != undefined) {
                                        d3.select("#clicked9")
                                            .html("<tspan style='font-weight: bold;'>Population: </tspan>" + populationString(Math.round(
                                                d3.selectAll("." + new_name)["0"]["1"]["__data__"]["Population"])));
                                    } else {
                                        d3.select("#clicked9")
                                            .html("<tspan style='font-weight: bold;'>Population: </tspan>no data");
                                    }
                                    d3.select("#clicked7")
                                        .html("");
                                } else if(d3.selectAll(".present1")["0"] != undefined) {
                                    if(d3.selectAll(".present1")["0"].length >= 1) {
                                        country_name = countryNameExceptions(countryName(d3.selectAll(".present1")["0"]["0"]["__data__"]
                                            ["properties"]["name"]));
                                        new_name = tipsyClassExceptions(country_name, year);
                                        new_name_hold = d3.selectAll(".present1")["0"]["0"]["__data__"]["properties"]["realname"]
                                        d3.select("#clicked1")
                                            .html(new_name_hold);
                                        d3.select("#clicked2")
                                            .html("");
                                        d3.select("#clicked3")
                                            .html("");
                                        d3.select("#clicked4")
                                            .html("");
                                        d3.select("#clicked5")
                                            .html("");
                                        d3.select("#clicked6")
                                            .html("");
                                        d3.select("#clicked8")
                                            .html("");
                                        d3.select("#clicked9")
                                            .html("");
                                        $(".medalimages").css("visibility", "hidden");
                                        d3.select("#clicked7")
                                            .html("Did not participate in the " + olympicYear + ".");
                                    }
                                }
                            }

                            // Draws interesting fact circles on the world map
                            drawTooltipCircles(year, olympicYear, blurb);

                        });
                    });
                });
            });
        });
    });
}


$(".medalimages").css("visibility", "hidden");

svg.append("text")
    .attr("class", "clicked")
    .attr("id", "welcome")
    .attr("text-anchor", "start")
    .attr("transform", "translate(" +
        (graph_x_value + 20) + ",-10)")
    .html("Visualizing Olympic Games Participation");

svg.append("text")
    .attr("class", "clicked")
    .attr("id", "welcome")
    .attr("text-anchor", "start")
    .attr("transform", "translate(" +
        (graph_x_value + 205) + ",25)")
    .html("1896-2008");

svg.append("text")
    .attr("class", "clicked")
    .attr("id", "selectacountry")
    .attr("text-anchor", "start")
    .attr("transform", "translate(" +
        (graph_x_value - 30) + ",50)")
    .html("Select a country to see Olympic data...");
	
	

// Mouseover, mouseout, and click functions for the circle and bar graphs

function mouseOver(d, color_arr) {
    class_string = countryNameExceptions(countryName(d["Country"]));
    d3.selectAll("." + class_string)
        .attr("fill", "#FFFF00")
}

function countryClick(d, color_arr, year) {
    name_hold = tipsyClassExceptions(countryNameExceptions(countryName(d["Country"])), year);;
    if(d3.selectAll("." + name_hold)["0"].length > 2) {
        $(".medalimages").css("visibility", "visible");
    }
    previous_name = "";
    if(d3.selectAll("#present1")["0"]["0"] != undefined) {
        previous_name = tipsyClassExceptions(countryNameExceptions(countryName(d3.selectAll("#present1")["0"]["0"]["__data__"]["properties"]["name"])), year);
    }
    if(name_hold != previous_name) {
        new_name_hold = d3.selectAll("." + name_hold)["0"]["1"]["__data__"]["Country"]
        d3.selectAll("#present1")
            .attr("id", function (d) {
                if(previous_name != "") {
                    if(d3.selectAll("." + previous_name)["0"]["1"] != undefined && (d3.selectAll("." + previous_name)["0"]["1"].localName == "rect" || d3.selectAll(
                        "." + previous_name)["0"]["0"].localName == "rect")) {
                        return "present"
                    }
                } else return null
            })
            .attr("fill", function (d) {
                d = $(this).attr("class").split(" ")[1];
                return countryColor(d, color_arr)
            });
        d3.selectAll("#black")
            .attr("id", null);
        d3.selectAll(".circles")
            .attr("fill", "#AFDCEC")
            .attr("r", function (d) {
                if($('#GDP').is(':checked')) {
                    if(d["GDP"] != undefined) {
                        return 4
                    };
                }
                if($('#POP').is(':checked')) {
                    if(d["Population"] != undefined) {
                        return 4
                    };
                }
            });
        d3.selectAll(".bars")
            .attr("fill", "#AFDCEC");
        country_name = countryNameExceptions(countryName(d["Country"]));
        new_name = tipsyClassExceptions(country_name, year);
        d3.selectAll("circle." + new_name)
            .attr("r", function (d) {
                if($('#GDP').is(':checked')) {
                    if(d["GDP"] != undefined) {
                        return 10
                    };
                }
                if($('#POP').is(':checked')) {
                    if(d["Population"] != undefined) {
                        return 10
                    };
                }
            });
        d3.selectAll("." + new_name)
            .attr("id", function () {
                if(this.id == "present") {
                    return "present1"
                } else return "black"
            })
            .attr("fill", "#FFFF00");
        d3.selectAll("#present1")["0"]["0"]["__data__"]["properties"]["realname"] = new_name_hold
        d3.selectAll(".clicked").remove();
        svg.append("text")
            .attr("class", "clicked")
            .attr("id", "clicked1")
            .attr("font", "sans-serif")
            .attr("text-anchor", "start")
            .attr("transform", "translate(" +
                (graph_x_value - 30) + ",-20)")
            .html(tipsyNameExceptions(new_name_hold, year));
        svg.append("text")
            .attr("class", "clicked")
            .attr("id", "clicked2")
            .attr("font", "sans-serif")
            .attr("text-anchor", "start")
            .attr("transform", "translate(" +
                (graph_x_value - 20) + ",-2)")
            .html("<tspan style='font-weight: bold;'>Rank:</tspan> " + d3.selectAll("." + new_name)["0"]["1"]["__data__"]["Rank"]);
        svg.append("text")
            .attr("class", "clicked")
            .attr("id", "clicked3")
            .attr("font", "sans-serif")
            .attr("text-anchor", "start")
            .attr("transform", "translate(" +
                (graph_x_value + 230) + ",-3)")
            .html("<tspan style='font-weight: bold;'>Gold:</tspan> " + d3.selectAll("." + new_name)["0"]["1"]["__data__"]["Gold"]);
        svg.append("text")
            .attr("class", "clicked")
            .attr("id", "clicked4")
            .attr("text-anchor", "start")
            .attr("transform", "translate(" +
                (graph_x_value + 380) + ",-3)")
            .html("<tspan style='font-weight: bold;'>Silver:</tspan> " + d3.selectAll("." + new_name)["0"]["1"]["__data__"]["Silver"]);
        svg.append("text")
            .attr("class", "clicked")
            .attr("id", "clicked5")
            .attr("text-anchor", "start")
            .attr("transform", "translate(" +
                (graph_x_value + 530) + ",-3)")
            .html("<tspan style='font-weight: bold;'>Bronze:</tspan> " + d3.selectAll("." + new_name)["0"]["1"]["__data__"]["Bronze"]);
        svg.append("text")
            .attr("class", "clicked")
            .attr("id", "clicked6")
            .attr("text-anchor", "start")
            .attr("transform", "translate(" +
                (graph_x_value - 20) + ",16)")
            .html("<tspan style='font-weight: bold;'>Total Medals:</tspan> " + d3.selectAll("." + new_name)["0"]["1"]["__data__"]["Total"]);
        svg.append("text")
            .attr("class", "clicked")
            .attr("id", "clicked8")
            .attr("text-anchor", "start")
            .attr("transform", "translate(" +
                (graph_x_value - 20) + ",34)")
            .html(function () {
                if(d3.selectAll("." + new_name)["0"]["1"]["__data__"]["GDP"] != undefined) {
                    return "<tspan style='font-weight: bold;'>GDP/Capita: $</tspan>" + populationString(Math.round(d3.selectAll("." + new_name)["0"]["1"][
                        "__data__"]["GDP"]))
                } else {
                    return "<tspan style='font-weight: bold;'>GDP/Capita: </tspan>no data"
                }
            })
        svg.append("text")
            .attr("class", "clicked")
            .attr("id", "clicked9")
            .attr("text-anchor", "start")
            .attr("transform", "translate(" +
                (graph_x_value - 20) + ",51)")
            .html(function () {
                if(d3.selectAll("." + new_name)["0"]["1"]["__data__"]["Population"] != undefined) {
                    return "<tspan style='font-weight: bold;'>Population: </tspan>" + populationString(Math.round(d3.selectAll("." + new_name)["0"]["1"][
                        "__data__"]["Population"]))
                } else {
                    return "<tspan style='font-weight: bold;'>Population: </tspan>no data"
                }
            })
        svg.append("text")
            .attr("class", "clicked")
            .attr("id", "clicked7")
            .attr("text-anchor", "start")
            .attr("transform", "translate(" +
                (graph_x_value - 20) + ",20)")
            .html("");
        $("#countryname").html("");
        $("#countryrank").html("")
        $("#countrymedals").html("");
        $("#countrystart").html("");
    }
}

function mouseOut(d, color_arr) {
    class_string = countryNameExceptions(countryName(d["Country"]));
    d3.selectAll("." + class_string)
        .attr("fill", function (d, i) {
            if(this.id == "present1") {
                return "#FFFF00"
            } else if(this.id == "black") {
                return "#FFFF00"
            } else if(this.classList.contains("path")) {
                e = $(this).attr("class").split(" ")[1];
                return countryColor(e, color_arr);
            } else return "#AFDCEC"
        });
}

function countryName(country_string) {
    class_string = "";
    if(country_string != undefined) {
        for(var i = 0; i < country_string.length; i++) {
            if(country_string[i] == "(") {
                break;
            }
            if(country_string[i] != " ") {
                class_string = class_string + country_string[i]
            }
        }
    }
    return class_string;
};


// Color function, designed to ensure that U.S. and Canada are different colors 
// (there is a peculiar issue with their ordering)

function countryColor(className, color_arr) {

    for(var i = 0; i < color_arr.length; i++) {
        if(className == color_arr[i]) {
            if(className == "China" || className == "UnitedStates") {
                d = i + 15;
                if(className == "China") {
                    return color(d);
                }
            }
            return color(i);
        }
    }
    return "red";
}

// Draws the GDP/Capita Graph

function drawGDPcircles(data_arr, xAxis_GDP, olympicYear, GDP_max, population_max, total_medal_max,
    xAxis_GDP, yAxis_winter_circles, yAxis_circles, yAxis_max_circles, x_GDP, x_pop, xAxis_GDP,
    xAxis_pop, y_bar_circles, y_bar_winter_circles, y_bar_max_circles, year) {

    d3.selectAll(".label").data([]).exit().remove();

    svg.append("g")
        .attr("class", "xgdpaxis x axis")
        .attr("transform", "translate( 0 ," + (GDP_graph_top_height + (GDP_graph_base_height - GDP_graph_top_height)) + ")")
        .call(xAxis_GDP)

    if(olympicYear.indexOf("Winter") != -1) {
        svg.append("g")
            .attr("class", "ygdpaxis y axis")
            .attr("transform", "translate(" + (GDP_graph_x_value - 3) + ",0)")
            .call(yAxis_winter_circles)
    } else if(total_medal_max < 115) {
        svg.append("g")
            .attr("class", "ygdpaxis y axis")
            .attr("transform", "translate(" + (GDP_graph_x_value - 3) + ",0)")
            .call(yAxis_circles)
    } else {
        svg.append("g")
            .attr("class", "ygdpaxis y axis")
            .attr("transform", "translate(" + (GDP_graph_x_value - 3) + ",0)")
            .call(yAxis_max_circles)
    }

    svg.append("text")
        .attr("class", "label")
        .attr("text-anchor", "start")
        .attr("transform", "translate(" +
            (GDP_graph_x_value + 474) + "," + (GDP_graph_base_height + 32) + ")")
        .text("GDP per Capita (US Dollars)");

    var gdpcircles = svg.selectAll(".frame")
        .data(data_arr)
        .enter()
        .append("g")
        .attr("class", "circlesholder")
        .attr("transform", function (d, i) {
            // varies the x_position of the graph bars based on variable width
            // (see next section)
            return "translate(" + x_GDP(d["GDP"]) + "," + (GDP_graph_base_height) + ")";
        });

    gdpcircles.append("circle")
        .attr("r", function (d, i) {
            new_name = tipsyClassExceptions(countryNameExceptions(countryName(d["Country"])));
            if($("path." + new_name).attr("id") == "present1") {
                return "10"
            } else if(d["GDP"] != undefined) {
                return 4
            }
        })
        .attr("cy", function (d, i) {
            return -y_bar_circles(d["Total"]) - 4
        })
        .attr("fill", function (d) {
            new_name = tipsyClassExceptions(countryNameExceptions(countryName(d["Country"])));
            if($("path." + new_name).attr("id") == "present1") {
                return "#FFFF00"
            } else return "#AFDCEC"
        })
        .attr("class", function (d) {
            class_string = countryNameExceptions(countryName(d["Country"]));
            return "circles " + class_string
        })

    if(year < 1960) {
        d3.selectAll(".notavailable").html("<tspan style='font-weight: bold;'>GDP/Capita Data Begins in 1960</tspan> ");
    }

}


// Draws the Population Graph

function drawPOPcircles(data_arr, xAxis_GDP, olympicYear, GDP_max, population_max, total_medal_max,
    xAxis_GDP, yAxis_winter_circles, yAxis_circles, yAxis_max_circles, x_GDP, x_pop, xAxis_GDP,
    xAxis_pop, y_bar_circles, y_bar_winter_circles, y_bar_max_circles, year) {

    d3.selectAll(".label").data([]).exit().remove();

    svg.append("g")
        .attr("class", "xpopaxis x axis")
        .attr("transform", "translate( 0 ," + (GDP_graph_top_height + (GDP_graph_base_height - GDP_graph_top_height)) + ")")
        .call(xAxis_pop)

    if(olympicYear.indexOf("Winter") != -1) {
        svg.append("g")
            .attr("class", "ypopaxis y axis")
            .attr("transform", "translate(" + (GDP_graph_x_value - 3) + ",0)")
            .call(yAxis_winter_circles)
    } else if(total_medal_max < 115) {
        svg.append("g")
            .attr("class", "ypopaxis y axis")
            .attr("transform", "translate(" + (GDP_graph_x_value - 3) + ",0)")
            .call(yAxis_circles)
    } else {
        svg.append("g")
            .attr("class", "ypopaxis y axis")
            .attr("transform", "translate(" + (GDP_graph_x_value - 3) + ",0)")
            .call(yAxis_max_circles)
    }

    svg.append("text")
        .attr("class", "label")
        .attr("text-anchor", "start")
        .attr("transform", "translate(" +
            (GDP_graph_x_value + 558) + "," + (GDP_graph_base_height + 32) + ")")
        .text("Population");

    var popcircles = svg.selectAll(".frame")
        .data(data_arr)
        .enter()
        .append("g")
        .attr("class", "circlesholder")
        .attr("transform", function (d, i) {
            // varies the x_position of the graph bars based on variable width
            // (see next section)
            return "translate(" + x_pop(d["Population"]) + "," + (GDP_graph_base_height) + ")";
        });

    popcircles.append("circle")
        .attr("r", function (d, i) {
            new_name = tipsyClassExceptions(countryNameExceptions(countryName(d["Country"])));
            if($("path." + new_name).attr("id") == "present1") {
                return "10"
            } else if(d["Population"] != undefined) {
                return 4
            }
        })
        .attr("cy", function (d, i) {
            return -y_bar_circles(d["Total"]) - 4
        })
        .attr("fill", function (d) {
            new_name = tipsyClassExceptions(countryNameExceptions(countryName(d["Country"])));
            if($("path." + new_name).attr("id") == "present1") {
                return "#FFFF00"
            } else return "#AFDCEC"
        })
        .attr("class", function (d) {
            class_string = countryNameExceptions(countryName(d["Country"]));
            return "circles " + class_string
        })

    if(year < 1960) {
        d3.selectAll(".notavailable").html("<tspan style='font-weight: bold;'>Population Data Begins in 1960</tspan> ");
    }

}

// Creates circle tooltips that include the interesting information for each olympics

function createTooltipCircle(tooltip_x_location, tooltip_y_location) {

    tooltip_circle = d3.select(".mapframe").datum(1).append("circle")
        .attr("r", "10")
        .attr("transform", "translate(" + (tooltip_x_location) + "," + (tooltip_y_location) + ")")
        .attr("class", "tooltip")
        .attr("id", "tooltipcircle")
        .attr("fill", "white")

    rectangle1_width = 10;
    rectangle1_height = 2;

    tooltip_rect1 = d3.select(".mapframe").datum(1).append("rect")
        .attr("width", rectangle1_width)
        .attr("height", rectangle1_height)
        .attr("class", "tooltip")
        .attr("id", "tooltiprect1")
        .attr("fill", "black")
        .attr("transform", "translate(" + (tooltip_x_location - (1 / 2) * rectangle1_width) + "," + (tooltip_y_location - (1 / 2) * rectangle1_height) + ")");

    rectangle2_width = 2;
    rectangle2_height = 10;

    tooltip_rect2 = d3.select(".mapframe").datum(1).append("rect")
        .attr("width", rectangle2_width)
        .attr("height", rectangle2_height)
        .attr("class", "tooltip")
        .attr("id", "tooltiprect2")
        .attr("fill", "black")
        .attr("transform", "translate(" + (tooltip_x_location - (1 / 2) * rectangle2_width) + "," + (tooltip_y_location - (1 / 2) * rectangle2_height) + ")");
}

// Addition circle tooltip changes, removes previous tooltips and sets new location

function drawTooltipCircles(year, olympicYear, blurb) {
    d3.selectAll(".tooltip").data([]).exit().remove();
    var blurb_string = "";
    for(var key in blurb) {
        if(blurb[key]["Year"] == olympicYear) {
            blurb_string = blurb[key]["Blurb"]
        }
    }
    if(blurb_string != undefined) {
        first_x = 200;
        first_y = 200;
        base_x = 0;
        base_y = 0;
        if(year == 1900 && olympicYear.indexOf("Summer") != -1) {
            base_x = first_x + 445;
            base_y = first_y + 280;
        }
        if(year == 1912 && olympicYear.indexOf("Summer") != -1) {
            base_x = first_x + 460;
            base_y = first_y + 180;
        }
        if(year == 1920 && olympicYear.indexOf("Summer") != -1) {
            base_x = first_x + 420;
            base_y = first_y + 280;
        }
        if(year == 1928 && olympicYear.indexOf("Summer") != -1) {
            base_x = first_x + 420;
            base_y = first_y + 280;
        }
        if(year == 1932 && olympicYear.indexOf("Summer") != -1) {
            base_x = first_x + 185;
            base_y = first_y + 305;
        }
        if(year == 1936 && olympicYear.indexOf("Summer") != -1) {
            base_x = first_x + 458;
            base_y = first_y + 246;
        }
        if(year == 1948 && olympicYear.indexOf("Winter") != -1) {
            base_x = first_x + 355;
            base_y = first_y + 325;
        }
        if(year == 1948 && olympicYear.indexOf("Summer") != -1) {
            base_x = first_x + 355;
            base_y = first_y + 325;
        }
        if(year == 1956 && olympicYear.indexOf("Summer") != -1) {
            base_x = first_x + 750;
            base_y = first_y + 455;
        }
        if(year == 1956 && olympicYear.indexOf("Winter") != -1) {
            base_x = first_x + 465;
            base_y = first_y + 315;
        }
        if(year == 1960 && olympicYear.indexOf("Summer") != -1) {
            base_x = first_x + 456;
            base_y = first_y + 305;
        }
        if(year == 1964 && olympicYear.indexOf("Summer") != -1) {
            base_x = first_x + 730;
            base_y = first_y + 325;
        }
        if(year == 1968 && olympicYear.indexOf("Summer") != -1) {
            base_x = first_x + 210;
            base_y = first_y + 347;
        }
        if(year == 1972 && olympicYear.indexOf("Winter") != -1) {
            base_x = first_x + 730;
            base_y = first_y + 325;
        }
        if(year == 1972 && olympicYear.indexOf("Summer") != -1) {
            base_x = first_x + 458;
            base_y = first_y + 246;
        }
        if(year == 1976 && olympicYear.indexOf("Summer") != -1) {
            base_x = first_x + 500;
            base_y = first_y + 380;
        }
        if(year == 1980 && olympicYear.indexOf("Summer") != -1) {
            base_x = first_x + 225;
            base_y = first_y + 305;
        }
        if(year == 1980 && olympicYear.indexOf("Winter") != -1) {
            base_x = first_x + 197;
            base_y = first_y + 305;
        }
        if(year == 1984 && olympicYear.indexOf("Summer") != -1) {
            base_x = first_x + 675;
            base_y = first_y + 210;
        }
        if(year == 1988 && olympicYear.indexOf("Summer") != -1) {
            base_x = first_x + 197;
            base_y = first_y + 253;
        }
        if(year == 1988 && olympicYear.indexOf("Winter") != -1) {
            base_x = first_x + 300;
            base_y = first_y + 335;
        }
        if(year == 1992 && olympicYear.indexOf("Winter") != -1) {
            base_x = first_x + 425;
            base_y = first_y + 280;
        }
        if(year == 1996 && olympicYear.indexOf("Summer") != -1) {
            base_x = first_x + 256;
            base_y = first_y + 316;
        }
        if(year == 2008 && olympicYear.indexOf("Summer") != -1) {
            base_x = first_x + 705;
            base_y = first_y + 305;
        }
        if(base_x != 0) {
            createTooltipCircle(base_x, base_y);
            d3.selectAll(".tooltip").on("mouseover", function () {
                d3.selectAll("#tooltipcircle").attr("fill", "blue");
                d3.selectAll("#tooltiprect1").attr("fill", "white");
                d3.selectAll("#tooltiprect2").attr("fill", "white");
                $(".specialtooltip")
                    .css("left", base_x - 230)
                    .css("top", base_y - 220);
                $(".specialtooltip")["0"].innerHTML = blurb_string;
                $(".specialtooltip").css("visibility", "visible");
            });
            d3.selectAll(".tooltip").on("mouseout", function () {
                d3.selectAll("#tooltipcircle").attr("fill", "white");
                d3.selectAll("#tooltiprect1").attr("fill", "black");
                d3.selectAll("#tooltiprect2").attr("fill", "black");
                $(".specialtooltip").css("visibility", "hidden");
            });
        }
    }
}

function drawTooltip(year, x_value, y_value) {
    d3.select("#specialtooltip")
        .style("left", x_value + "px")
        .style("top", y_value + "px")
        .text(year);
    $("#specialtooltip").css("visibility", "visible");
}


// Functions used to play Olympic changes over the years

global_counter = 0;
interval = 0;

function timelapseStart() {
    clearInterval(interval);
    global_counter = ($('#defaultslide').slider("option", "value"));
    if($('.SummerOlympics').attr('checked') == "checked") {
        if(global_counter == (summerOlympics_arr.length - 1)) {
            global_counter = 0;
        }
    }
    if($('.WinterOlympics').attr('checked') == "checked") {
        if(global_counter == (winterOlympics_arr.length - 1)) {
            global_counter = 0;
        }
    }
    interval = setInterval(timelapse, 1500);
};
/* modified from user: Scott Gonzalez, accessed: April 7th, 2014, url: https://api.jqueryui.com/theming/icons/ */
function timelapse() {
    if($('.SummerOlympics').attr('checked') == "checked") {
        if(global_counter < summerOlympics_arr.length) {
            $('#defaultslide').slider({
                max: 26,
                value: global_counter
            });
            updateEverything(summerOlympics_arr[global_counter]);
            $('#currentval').html(summerHost_arr[global_counter]);
            global_counter++;
        } else {
            global_counter = 0;
            clearInterval(interval);
            options = {
                label: "play",
                icons: {
                    primary: "ui-icon-play"
                }
            };
            $("#play").button("option", options);
        }
    } else {
        if(global_counter < winterOlympics_arr.length) {
            $('#defaultslide').slider({
                max: 19,
                value: global_counter
            });
            updateEverything(winterOlympics_arr[global_counter]);
            $('#currentval').html(winterHost_arr[global_counter]);
            global_counter++;
        } else {
            global_counter = 0;
            clearInterval(interval);
            options = {
                label: "play",
                icons: {
                    primary: "ui-icon-play"
                }
            };
            $("#play").button("option", options);
        }
    }
};

/* modified from user: Scott Gonzalez, accessed: April 7th, 2014, url: https://api.jqueryui.com/theming/icons/ */

// Draws and defines the jQuery UI play button
function playButton() {
    $("#play").button({
        text: false,
        icons: {
            primary: "ui-icon-play"
        }
    })
        .click(function () {
            var options;
            if($(this).text() === "play") {
                options = {
                    label: "pause",
                    icons: {
                        primary: "ui-icon-pause"
                    }
                };
            } else {
                options = {
                    label: "play",
                    icons: {
                        primary: "ui-icon-play"
                    }
                };
                clearInterval(interval);
            }
            $(this).button("option", options);
        });
}
playButton();