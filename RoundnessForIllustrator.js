// JavaScript source code
//Roundness calculation tool for Adobe Illustrator
//Roundness is defined as diameter of largest inscribed circle divided by the average of the small circles.
//This code measures diameters of circles. This code define the longest path of circle as maximum inscribed circle and the others as the small inscribed circle.
main();

function main() {
    //check num of opened files
    if (documents.length < 1) {
        //if no file opeded
        alert("There is no opened file. \r\nPlease open ai file.","Roundness Calculator");
        return;
    }

    //check num of selected objects
    var selected_obj = activeDocument.selection;
    if (!(selected_obj instanceof Array) || selected_obj.length < 1) {
        //if no object selected
        show_alert("There is no selected objects.\r\nPlease chose circles.");
        return;
    }

    //extract path from obj
    var selected_paths = [];
    var min_path_points = 1;
    //extract_paths(selected_obj, min_path_points, selected_paths);
    selected_paths = extract_paths(selected_obj, selected_paths);
    if (selected_paths.length < 1) {
        alert("There is no selected paths. \r\nPlease chose circles.", "Roundness Calculator");
        return;
    } else if (selected_paths.length < 2) {
        alert("There is no enough number of circles. \r\nPlease chose more than 2 circles.", "Roundness Calculator");
    }

    //Round to 2 decimal places
    var path_length = 0;
    var PATH_LENGTH = [];
    var r = 0;
    for (i = 0; i < selected_paths.length; i++) {
        path_diameter = selected_paths[i].length / (Math.PI);//diameter of circle
        PATH_LENGTH[i] = Math.round(path_diameter * 100) / 100;//Round to 2 decimal places
    }

    //sort by largest
    PATH_LENGTH.sort(
        function (a, b) {
            if (a > b) return -1;
            if (a < b) return 1;
            return 0;
        }
    );

    //claculate roundness
    //calc average of small circle diameters
    var r = 0;
    for (i = 1; i < selected_paths.length; i++) {
        r = r + PATH_LENGTH[i];
    }
    r = r / (PATH_LENGTH.length - 1);

    var R = r / PATH_LENGTH[0];//calc roundness

    show_alert("Roundness: " + Math.round(R * 1000) / 1000 + "\r\n Max diameter: " + PATH_LENGTH[0] + "\r\n Mean small diameter: " + r + "\r\n\r\n All data: \r\n[" + (PATH_LENGTH).join('], ['));//show result on prompt

}


function extract_paths(obj, paths) {
    var min_path_points = 1;//if line, points are more than 2.
    //check type of each object
    for (var i = 0; i < obj.length; i++) {
        //check type, no guide object, no clipping path
        if (obj[i].typename == "PathItem" && !obj[i].guides && !obj[i].clipping) {
            //check a line or a point
            if (min_path_points && obj[i].pathPoints.length <= min_path_points) {
                continue;
            }
            paths.push(obj[i]);//add path
        } else if (obj[i].typename == "GroupItem") {
            //case of group
            paths = extract_paths(obj[i].pageItems, paths);
        } else if (obj[i].typename == "CompoundPathItem") {
            //case of Compound Path
            paths = extract_paths(obj[i].pathItems, paths);
        }
    }
    return paths;
}

function get_path_location(paths) {
    for (var i = 0; i < paths.length; i++) {
        paths[i].position
        alert(paths[i].position);
    }
}

function show_alert(txt) {
    var dialog = new Window("dialog", "Roundness Calculator");
    dialog.size = [300, 250]; // [W,H]

    var text = dialog.add("statictext", [1, 1, 300, 180], txt, { multiline: true, scrolling: true });
    //text.justify = "center";
    text.verticalAlignment = "top";

    var okButton = dialog.add("button", undefined, "OK");
    okButton.onClick = function () {
        dialog.close();
    };

    dialog.show();
}
