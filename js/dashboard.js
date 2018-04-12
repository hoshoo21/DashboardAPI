var settingDialogCounter = 1;
var charts = [];
var preConfigDialog = [];
var globalDriverName = [];
var globalRegData = [];
var globalDistanceData = [];
var globalAssetId = [];
var globalDriversId = [];
var MPG = [];
var TargetMpg = [];
var Scroe = [];
var kpiprefix ='KM'
var addMoreDialogTemplate = '  <div class="card card-block"> ' +
                                ' <div class="col-md-7 col-md-offset-5"><a href="#" class="btn btn-primary" onclick="addMoreChat(this); return false;"><i class="fa fa-plus" aria-hidden="true"></i>Add More</a></div>' +
                                ' </div>' +
                                ' </div> </div>';
var addChartDialogTeemplate = ' <div id="chartsDialog" class="panel panel-default" style="display:none;"> ' +
                                ' <div id="chartHeading" class="panel-heading" style="display:none;"><a href="#"><icon id="fulScreen" class="fa fa-desktop" aria-hidden="true" onclick ="showFullScreenForChart(this);"></i></a>&nbsp;&nbsp; <a  href="#" > <i id="iconDelete" class="fa fa-trash-o fa-2x" aria-hidden="true" onclick="removeParent(this);"></i> </a><a id="lnkSettings" onclick ="fliptoChart(this);"  href="#" class="pull-right"><i id="iconsettings" class="fa fa-cog" aria-hidden="true" onclick="showDelete(this);"></i></a>  [ChartTitle] </div>' +
                                '<div class="panel-body" style="padding-left:0px; padding-right:15px; padding-bottom:0px; padding-top:15px; " >' +
                                '<div class="form-group" >' +

                                ' <div id="firstTrendChart" style="width: 100%; height: 300px"> ' +
                                '</div> ' +
                                ' <div class="loader" id="loader" style="display:none"></div>' +
        
                                ' </div>' +
                                ' </div>' +
                                '<div class="panel-footer">' +

                                '</div>' +
                               '</div>' +
                               '<div id="NoResultDialog" class="panel panel-default" style="display:none;">' +
                               '<div class="panel-heading" style="display:block;"><a id="nolnkSettings" onclick ="fliptoChart(this);"  href="#" class="pull-right"><i class="fa fa-cog fa-2x" aria-hidden="true"></i></a> &nbsp;</div>' +
                               '<div class="panel-body" style="padding-left:0px; padding-right:15px; padding-bottom:0px; padding-top:15px; " >' +
                               '<div class="containernoresult" style="width: 100%; height: 320px;" >' +
                                 '<p> No Data Available for selected Criteria </p> ' +

                               '</div>' +
                               
                                '</div>' +
                                '<div class="panel-footer">' +

                                '</div>' +

                               '</div>' +
                               '<div id="settingDialog" class="panel panel-default" style="display:none;">' +
                               //'<div id="settingDialog" class="panel panel-default" style="display:none">' +

                                '<div class="panel-heading"> <b>Setings </b> </div> <br />' +
                                '<div class="panel-body">' +
                                '<div class="form-group">' +
                                '<div class="row"> ' +

                                '<div class="col-xs-4 text-left">' +
                                '<input name="ChartDbId" id="ChartDbId" type="hidden" value="-1">' +
                                '<input name="ModalPOIWeekDay" type="hidden" value="false">' +
                                ' <label for="ddlMatricType">Chart Title</label>' +
                                ' </div>' +
                                '<div class="col-xs-8">' +
                                '<select  class="form-control" id="ddlMatricType" onchange="showValuesPerKPI(this)">' +
                                '<option value="1~vl_Reporting.dbo.sp_Chart_Distance_dev">Distance</option>' +
                                '<option value="2~vl_Reporting.dbo.sp_Chart_VehicleMPGTargetMPG">Vehicle MPG, Vehicle Target MPG</option>' +
                                '<option value="3~vl_Reporting.dbo.sp_Chart_FleetMPGTargetMPG">Fleet MPG. Fleet Target MPG</option>' +
                                //'<option value="4~vl_Reporting.dbo.sp_Chart_CO2Fleet">Vehicle Fuel Card MPG, Vehicle Fuel Card MPG Target</option>' +
                                '<option value="5~vl_Reporting.dbo.sp_Chart_CO2Fleet">Co2 Fleet</option>' +
                                '<option value="6~vl_Reporting.dbo.sp_Chart_CO2Vehicle">Co2 Vehicle</option>' +
                                '<option value="7~vl_Reporting.dbo.sp_Chart_MilesPerHB">Vehicle Miles per HB</option>' +
                                '<option value="8~vl_Reporting.dbo.sp_Chart_MilesPerHA">Vehicle Miles per HA</option>' +
                                '<option value="9~vl_Reporting.dbo.sp_Chart_DurationIdle">Vehicle Idling Time</option>' +
                                '<option value="10~vl_Reporting.dbo.sp_Chart_DurationExcessIdle">Vehicle Xidling Time</option>' +
                                '<option value="11~vl_Reporting.dbo.sp_Chart_AccelHarshLeft">Accel Harsh L </option>' +
                                '<option value="12~vl_Reporting.dbo.sp_Chart_AccelHarshRight">Accell Harsh R</option>' +
                                '<option value="13~vl_Reporting.dbo.sp_Chart_DriverScoreSpeeding">Driver Score Speeding</option>' +
                                '<option value="14~vl_Reporting.dbo.sp_Chart_DriverScoreRPM">Driver Score Over RPM</option>' +
                                '<option value="15~vl_Reporting.dbo.sp_Chart_DriverScoreMPG">Driver Score MPG</option>' +
                                '<option value="16~vl_Reporting.dbo.sp_Chart_DriverScoreHB">Driver Score HB</option>' +
                                '<option value="17~vl_Reporting.dbo.sp_Chart_DriverScoreTotal">Total Driver Score</option>' +
                                '<option value="18~vl_Reporting.dbo.sp_PlotChart_FleetMPG">Plot Chart - Fleet MPG</option>' +
                                '<option value="19~vl_Reporting.dbo.sp_PlotChart_VehicleMPG">Plot Chart - Vehicle MPG</option>' +
                                '<option value="20~vl_Reporting.dbo.sp_PlotChart_FuelUsedPerMonth">Plot Chart - Fuel Used per month (Litres)</option>' +
                                '<option value="21~vl_Reporting.dbo.sp_PlotChart_FuelUsedPerMonth">Plot Chart - Fuel Cost per month (£)</option>' +
                                '<option value="22~vl_Reporting.dbo.sp_PlotChart_FuelWastedOnIdlePerMonth">Plot Chart - Fuel Wasted on idle per month (litres)</option>' +
                                '<option value="23~vl_Reporting.dbo.sp_PlotChart_FuelWastedOnIdlePerMonth">Plot Chart - Fuel Wasted on idle Cost per month (£)</option>' +
                                '<option value="24~vl_Reporting.dbo.sp_PlotChart_FuelWastedOnIdlePerMonth">Plot Chart - Time Wasted Idling  (hh:mm)</option>' +
                                '</select>' +
                                '</div>' +
                                '</div>' +
                                '</div>' +
                                '<div class="form-group">' +
                                '<div class="row"> ' +
                                '<div class="col-xs-4 text-left">' +
                                '<input type="hidden" value="false">' +
                                ' <label for="material-select2">Chart Types</label> ' +
                                '</div>' +
                                '<div class="col-xs-4">' +
                                '<select   onchange = "changeRanking(this);"class="form-control" id="ddlRanking">' +
                                '</select>' +
                                '</div>' +
                                ' <div class="col-xs-4">' +
                                '<select  class="form-control" id="RanlingType">' +
                                '<option value="T5">Top 5</option>' +
                                '<option value="T10">Top 10</option>' +
                                '<option value="T15">Top 15</option>' +
                                '<option value="T20">Top 20</option>' +
                                '<option value="T50">Top 50</option>' +
                                '<option value="B5">Bottom 5</option>' +
                                '<option value="B10">Bottom 10</option>' +
                                '<option value="B15">Bottom 15</option>' +
                                '<option value="B20">Bottom 20</option>' +
                                '<option value="B50">Bottom 50</option>' +
                                '</select>' +
                                '</div>' +
                                '</div>' +
                                '</div>' +
                                '<div class="form-group">' +
                                '<div class="row">' +
                                ' <div class="col-xs-4 text-left">' +
                                ' <label for="ddlShow">Show</label>' +
                                '</div>' +
                                '<div class="col-xs-8">' +
                                '<select  class="form-control" id="ddlShow">' +
                                ' </select>' +
                                ' </div>' +
                                ' </div>   </div>' +
                                ' <div class="form-group">' +
                                ' <div class="row">' +
                                ' <div class="col-xs-4 text-left"> ' +
                                ' <label for="ddlTime">Time</label>' +
                                ' </div>' +
                                ' <div class="col-xs-8">' +
                                 '<input name="WeekDuration" id="WeekDuration" type="hidden" value="false">' + 
                                 '<input name="GetData" id="GetData" type="hidden" value="true">' +
                                   ' <select class="form-control" onchange="storevalue(this);"  id="ddlTime">' +
                                        
                                        
                                    '</select>' +
                                '</div>' +
                                '</div>' +
                                ' </div>' +
                                '    <div class="form-group "> ' +
                                ' <div class="row"> ' +
                                ' <div class="col-xs-4 text-left"> ' +
                                ' <label for="ddlTime">Size</label>' +
                                '</div> ' +
                                '<div class="col-xs-8">' +
                                ' <select class="form-control" id="ddlSize">' +
                                     '<option value="600">3</option>' +
                                    '<option value="520">2</option>' +
                                    '<option value="400">1</option>' +
                                '</select>' +
                                '</div> ' +
                                '</div>' +
                                '</div>' +
                                '</div>' +
                                '<div class="panel-footer">' +
                                '<button data-dismiss="modal" type="button" class="btn btn-sm btn-default" onclick ="showChart(this,null,false);" id="tempTClose">Cancel</button>' +
                                '<button type="button" class="btn btn-sm btn-primary" onclick ="showChart(this,null,true);" id="TemperatureTagpopBtn"><i class="fa fa-check"></i>Save</button>' +
                                '</div>' +
                                ' </div>';

var showarray = [];
showarray.push('<option value="6">Today</option>');
showarray.push('<option value="7">Yesterday</option>');
showarray.push('<option value="1">This Week</option>');
showarray.push('<option value="3">Last Week</option>');
showarray.push('<option value="2">This Month</option>');
showarray.push('<option value="4">Last Month</option>');
showarray.push('<option value="8">Last 6 Months</option>');
showarray.push('<option value="9">Last Year</option>');
showarray.push('<option value="5">YTD</option>');
var groupbyarray = [];
groupbyarray.push('<option value="2">Vehicles</option>');
groupbyarray.push('<option value="1">Drivers</option>');
groupbyarray.push('<option value="3">Fleet</option>');
groupbyarray.push('<option value="4">Money</option>');
groupbyarray.push('<option value="5">Time</option>');
groupbyarray.push('<option value="6">Liters</option>');

var chartsTypeArray = [];
chartsTypeArray.push('<option value="1">Trend</option>');
chartsTypeArray.push('<option value="2">Ranking</option>');
chartsTypeArray.push('<option value="3">Gauge</option>');
chartsTypeArray.push('<option value="4">Pie Chart</option>');
chartsTypeArray.push('<option value="5">Fixed Column</option>');
chartsTypeArray.push('<option value="6">Spline</option>');



Array.prototype.contains = function (obj) {
    var i = this.length;
    while (i--) {
        if (this[i].chartId === obj) {
            return i;
        }
    }
    return -1;
}

function showValuesPerKPI(lnkId, rawId) {
    var Id=0;
    if (lnkId != null)
        Id = $(lnkId).attr('id').toString().match(numberPattern)[0];
    else
        Id = rawId;
    var KPiSelection = $('#ddlMatricType' + Id + ' :selected').text();
    if (KPiSelection == '') {
        KPiSelection = 'Vehicle MPG, Vehicle Target MPG';
    }
    $('#ddlTime' + Id).empty();
    $('#ddlShow' + Id).empty();
    $('#ddlRanking' + Id).empty();
    switch (KPiSelection) {
        case "Vehicle MPG, Vehicle Target MPG":
            for (var i = 0; i < showarray.length; i++) {
                $('#ddlTime' + Id).append(showarray[i]);
            }
            for (var i = 0; i < 1; i++) {
                $('#ddlShow' + Id).append(groupbyarray[i]);
            }
            $('#ddlRanking' + Id).append(chartsTypeArray[2]);
            $('#ddlRanking' + Id).append(chartsTypeArray[4]);
          
         break;
        case "Fleet MPG. Fleet Target MPG":
            for (var i = 1; i < showarray.length; i++) {
                $('#ddlTime' + Id).append(showarray[i]);
            }
            for (var i = 1; i < 2; i++) {
                $('#ddlShow' + Id).append(groupbyarray[i]);
            }
            $('#ddlRanking' + Id).append(chartsTypeArray[2]);
            $('#ddlRanking' + Id).append(chartsTypeArray[4]);
        break;
        case "Vehicle Fuel Card MPG, Vehicle Fuel Card MPG Target":
            for (var i = 2; i < showarray.length; i++) {
                $('#ddlTime' + Id).append(showarray[i]);
            }
            for (var i = 0; i < 1; i++) {
                $('#ddlShow' + Id).append(groupbyarray[i]);
            }
            $('#ddlRanking' + Id).append(chartsTypeArray[2]);
            $('#ddlRanking' + Id).append(chartsTypeArray[4]);
        case "Co2 Fleet":
            for (var i = 2; i < showarray.length; i++) {
                $('#ddlTime' + Id).append(showarray[i]);
            }
            for (var i = 0; i < 1; i++) {
                $('#ddlShow' + Id).append(groupbyarray[i]);
            }
            $('#ddlRanking' + Id).append(chartsTypeArray[0]);
            $('#ddlRanking' + Id).append(chartsTypeArray[1]);
            $('#ddlRanking' + Id).append(chartsTypeArray[5]);
            break;
         
        case "Distance":
            kpiprefix = 'Km';
            for (var i = 0; i < showarray.length; i++) {
                $('#ddlTime' + Id).append(showarray[i]);
            }
            for (var i = 0; i < 6; i++) {
                $('#ddlShow' + Id).append(groupbyarray[i]);
            }
            for (var i = 0; i < chartsTypeArray.length; i++) {
                $('#ddlRanking' + Id).append(chartsTypeArray[i]);
            }
            break;
        case "Co2 Vehicle":
            for (var i = 1; i < showarray.length; i++) {
                $('#ddlTime' + Id).append(showarray[i]);
            }
            for (var i = 0; i < 1; i++) {
                $('#ddlShow' + Id).append(groupbyarray[i]);
            }
            $('#ddlRanking' + Id).append(chartsTypeArray[0]);
            $('#ddlRanking' + Id).append(chartsTypeArray[1]);
            break;
        case "Vehicle Miles per HB":
            for (var i = 1; i < showarray.length; i++) {
                $('#ddlTime' + Id).append(showarray[i]);
            }
            for (var i = 0; i < 1; i++) {
                $('#ddlShow' + Id).append(groupbyarray[i]);
            }
            $('#ddlRanking' + Id).append(chartsTypeArray[0]);
            $('#ddlRanking' + Id).append(chartsTypeArray[1]);
            break;
        case "Vehicle Miles per HA":
            for (var i = 1; i < showarray.length; i++) {
                $('#ddlTime' + Id).append(showarray[i]);
            }
            for (var i = 0; i < 1; i++) {
                $('#ddlShow' + Id).append(groupbyarray[i]);
            }
            $('#ddlRanking' + Id).append(chartsTypeArray[0]);
            $('#ddlRanking' + Id).append(chartsTypeArray[1]);
            break;
        case "Vehicle Idling Time":
            for (var i = 0; i < showarray.length; i++) {
                $('#ddlTime' + Id).append(showarray[i]);
            }
            for (var i = 0; i < 1; i++) {
                $('#ddlShow' + Id).append(groupbyarray[i]);
            }
            $('#ddlRanking' + Id).append(chartsTypeArray[0]);
            $('#ddlRanking' + Id).append(chartsTypeArray[1]);
            break;
        case "Vehicle Xidling Time":
            for (var i = 0; i < showarray.length; i++) {
                $('#ddlTime' + Id).append(showarray[i]);
            }
            for (var i = 0; i < 1; i++) {
                $('#ddlShow' + Id).append(groupbyarray[i]);
            }
            $('#ddlRanking' + Id).append(chartsTypeArray[0]);
            $('#ddlRanking' + Id).append(chartsTypeArray[1]);
            break;
        case "Accel Harsh L":
            for (var i = 0; i < showarray.length; i++) {
                $('#ddlTime' + Id).append(showarray[i]);
            }
            for (var i = 0; i < 2; i++) {
                $('#ddlShow' + Id).append(groupbyarray[i]);
            }
            $('#ddlRanking' + Id).append(chartsTypeArray[0]);
            $('#ddlRanking' + Id).append(chartsTypeArray[1]);
            break;
        case "Accell Harsh R":
            for (var i = 1; i < showarray.length; i++) {
                $('#ddlTime' + Id).append(showarray[i]);
            }
            for (var i = 0; i < 2; i++) {
                $('#ddlShow' + Id).append(groupbyarray[i]);
            }
            $('#ddlRanking' + Id).append(chartsTypeArray[0]);
            $('#ddlRanking' + Id).append(chartsTypeArray[1]);
            break;
        case "Driver Score Speeding":
            for (var i = 1; i < showarray.length; i++) {
                $('#ddlTime' + Id).append(showarray[i]);
            }
            for (var i = 1; i < 2; i++) {
                $('#ddlShow' + Id).append(groupbyarray[i]);
            }
            $('#ddlRanking' + Id).append(chartsTypeArray[0]);
            $('#ddlRanking' + Id).append(chartsTypeArray[1]);
            break;
        case "Driver Score Over RPM":
            for (var i = 1; i < showarray.length; i++) {
                $('#ddlTime' + Id).append(showarray[i]);
            }
            for (var i = 1; i < 2; i++) {
                $('#ddlShow' + Id).append(groupbyarray[i]);
            }
            $('#ddlRanking' + Id).append(chartsTypeArray[0]);
            $('#ddlRanking' + Id).append(chartsTypeArray[1]);
            break;
        case "Driver Score MPG":
            for (var i = 1; i < showarray.length; i++) {
                $('#ddlTime' + Id).append(showarray[i]);
            }
            for (var i = 1; i < 2; i++) {
                $('#ddlShow' + Id).append(groupbyarray[i]);
            }
            $('#ddlRanking' + Id).append(chartsTypeArray[0]);
            $('#ddlRanking' + Id).append(chartsTypeArray[1]);
            break;
        case "Driver Score HB":
            for (var i = 1; i < showarray.length; i++) {
                $('#ddlTime' + Id).append(showarray[i]);
            }
            for (var i = 1; i < 2; i++) {
                $('#ddlShow' + Id).append(groupbyarray[i]);
            }
            break;
        case "Total Driver Score":
            for (var i = 1; i < showarray.length; i++) {
                $('#ddlTime' + Id).append(showarray[i]);
            }
            for (var i = 1; i < 2; i++) {
                $('#ddlShow' + Id).append(groupbyarray[i]);
            }
            $('#ddlRanking' + Id).append(chartsTypeArray[0]);
            $('#ddlRanking' + Id).append(chartsTypeArray[1]);
            kpiprefix = 'Kg';
            break;
        case "Driver Score Speeding":
            for (var i = 1; i < showarray.length; i++) {
                $('#ddlTime' + Id).append(showarray[i]);
            }
            for (var i = 1; i < 2; i++) {
                $('#ddlShow' + Id).append(groupbyarray[i]);
            }
            $('#ddlRanking' + Id).append(chartsTypeArray[0]);
            $('#ddlRanking' + Id).append(chartsTypeArray[1]);
            break;
        case "Driver Score Over RPM":
            for (var i = 1; i < showarray.length; i++) {
                $('#ddlTime' + Id).append(showarray[i]);
            }
            for (var i = 1; i < 2; i++) {
                $('#ddlShow' + Id).append(groupbyarray[i]);
            }
            $('#ddlRanking' + Id).append(chartsTypeArray[0]);
            $('#ddlRanking' + Id).append(chartsTypeArray[1]);
            break;
        case "Driver Score MPG":
            for (var i = 1; i < showarray.length; i++) {
                $('#ddlTime' + Id).append(showarray[i]);
            }
            for (var i = 1; i < 2; i++) {
                $('#ddlShow' + Id).append(groupbyarray[i]);
            }
            $('#ddlRanking' + Id).append(chartsTypeArray[0]);
            $('#ddlRanking' + Id).append(chartsTypeArray[1]);
            break;
        case "Driver Score HB":
            for (var i = 1; i < showarray.length; i++) {
                $('#ddlTime' + Id).append(showarray[i]);
            }
            for (var i = 1; i < 2; i++) {
                $('#ddlShow' + Id).append(groupbyarray[i]);
            }
            $('#ddlRanking' + Id).append(chartsTypeArray[0]);
            $('#ddlRanking' + Id).append(chartsTypeArray[1]);
            break;
        case "Plot Chart - Fleet MPG":
            for (var i = 1; i < showarray.length; i++) {
                $('#ddlTime' + Id).append(showarray[i]);
            }
            for (var i = 0; i < 1; i++) {
                $('#ddlShow' + Id).append(groupbyarray[i]);
            }
            
            $('#ddlRanking' + Id).append(chartsTypeArray[5]);
            kpiprefix = 'MPG';


            break;
        case "Plot Chart - Vehicle MPG":
            for (var i = 1; i < showarray.length; i++) {
                $('#ddlTime' + Id).append(showarray[i]);
            }
            for (var i = 0; i < 1; i++) {
                $('#ddlShow' + Id).append(groupbyarray[i]);
            }
            kpiprefix = 'MPG';
            $('#ddlRanking' + Id).append(chartsTypeArray[5]);
            break;
        case "Plot Chart - Driver MPG Score":
            for (var i = 1; i < showarray.length; i++) {
                $('#ddlTime' + Id).append(showarray[i]);
            }
            for (var i = 1; i < 2; i++) {
                $('#ddlShow' + Id).append(groupbyarray[i]);
            }
            $('#ddlRanking' + Id).append(chartsTypeArray[5]);
            break;
        case "Plot Chart - Fuel Used per month (Litres)":
            for (var i = 6; i < showarray.length; i++) {
                $('#ddlTime' + Id).append(showarray[i]);
            }
            for (var i = 5; i <=5; i++) {
                $('#ddlShow' + Id).append(groupbyarray[i]);
            }
            $('#ddlRanking' + Id).append(chartsTypeArray[5]);
            break;
        case "Plot Chart - Fuel Cost per month (£)":
            for (var i = 6; i < showarray.length; i++) {
                $('#ddlTime' + Id).append(showarray[i]);
            }
            for (var i = 3; i <= 3; i++) {
                $('#ddlShow' + Id).append(groupbyarray[i]);
            }
            $('#ddlRanking' + Id).append(chartsTypeArray[5]);
            break;
        case "Plot Chart - Fuel Wasted on idle Cost per month (£)":
            for (var i = 6; i < showarray.length; i++) {
                $('#ddlTime' + Id).append(showarray[i]);
            }
            for (var i = 3; i <= 3; i++) {
                $('#ddlShow' + Id).append(groupbyarray[i]);
            }
            $('#ddlRanking' + Id).append(chartsTypeArray[5]);
            break;
        case "Plot Chart - Fuel Wasted on idle per month (litres)":
            for (var i = 6; i < showarray.length; i++) {
                $('#ddlTime' + Id).append(showarray[i]);
            }
            for (var i = 6; i <= 6; i++) {
                $('#ddlShow' + Id).append(groupbyarray[i]);
            }
            $('#ddlRanking' + Id).append(chartsTypeArray[5]);
            break;
        case "Plot Chart - Fuel Wasted on idle Cost per month (£)":
            for (var i =4 ; i < showarray.length; i++) {
                $('#ddlTime' + Id).append(showarray[i]);
            }
            for (var i = 3; i <= 3; i++) {
                $('#ddlShow' + Id).append(groupbyarray[i]);
            }
            $('#ddlRanking' + Id).append(chartsTypeArray[5]);
            break;
           
        case "Plot Chart - Time Wasted Idling  (hh:mm)":
            for (var i = 6; i < showarray.length; i++) {
                $('#ddlTime' + Id).append(showarray[i]);
            }
            for (var i = 4; i <= 4; i++) {
                $('#ddlShow' + Id).append(groupbyarray[i]);
            }
            $('#ddlRanking' + Id).append(chartsTypeArray[5]);
            break;
    }
}



function getMonthString(currentmonth) {

    switch (currentmonth.toString()) {
        case "4":
            return 'April';
            break;
        case "3":
            return 'March';
            break;
        case "2":
            return'Feb';
            break;
        case "1":
            return'Jan';
            break;
        case "12":
            return 'Dec';
            break;
        case "11":
            return 'Nov'
            break;
        case "10":
            return 'Oct';
            break;
        case "9":
            return 'Sept';
            break;
        case "8":
            return 'Aug';
            break;
        case "7":
            return 'Jun';
            break;
        case "6":
            return 'Jul';
            break;
        case "5":
            return 'May';
            break;
    }

}
function convertToUTCDate(timestring) {
    var timeparts='';
    if (timestring.length == 2) {
        timeparts = timestring[1].split(":");
    }
    else {
        timeparts = timestring.split(":");
    }
    return Date.UTC(2017, 1, 1, timeparts[0], timeparts[1], timeparts[2])
}

function converttoHhMMSS(SECONDS) {
    var date = new Date(2014, 1, 1);
    date.setSeconds(SECONDS); // specify value for SECONDS here
    console.log(date);
    return date.toISOString().substr(11, 8);
    //var timeparts = date.toISOString().substr(11, 8).split(":");
    //return Date.UTC(2017, 1, 1, timeparts[s0], timeparts[1], timeparts[2])
}

function GetReportParams(paramreport_code,DivId, assetname) {
    var assetList = [];
    assetList.push(assetname);
    //var indexpos = renderedchartobjects.contains(DivId);

    //if (indexpos >= 0) {
    //    var chartobj=   renderedchartobjects[indexpos];
    //    for (var i = 0; i < chartobj.xAxisData.length; i++) {
    //        if (assetname == chartobj.xAxisData[i]) {
    //            assetList.push(chartobj.AssetIds[i]);
    //        }
    //    }
    //}
    var id = DivId.match(numberPattern)[0];

    
    var showAll = false;
    var speedTreshold = 0;
    var reportType = '';
    var price_per_liter = 1;
    var chartType = '';

    var durattiontext = fullChartObject.periodText;

    var curr = new Date;
    var firstday = new Date;
    var lastday = new Date;
    switch (durattiontext) {
        case 'This Week':
            firstday = new Date(curr.getFullYear(), curr.getMonth(), curr.getDate() - curr.getDay());
            lastday = new Date(curr.getFullYear(), curr.getMonth(), curr.getDate());
            break;
        case 'Last Week':
            firstday = new Date(curr.getFullYear(), curr.getMonth(), curr.getDate() - curr.getDay() - 7);
            lastday = new Date(curr.getFullYear(), curr.getMonth(), curr.getDate() - curr.getDay() - 1);
            break;
        case 'This Month':
            firstday = new Date(curr.getFullYear(), curr.getMonth(), 1);
            lastday = new Date(curr.getFullYear(), curr.getMonth(), curr.getDate());
            break;
        case 'Last Month':
            firstday = new Date(curr.getFullYear(), curr.getMonth() - 1, 1);
            lastday = new Date(curr.getFullYear(), curr.getMonth(), 0);
            break;
    }
    Number.prototype.padLeft = function (base, chr) {
        var len = (String(base || 10).length - String(this).length) + 1;
        return len > 0 ? new Array(len).join(chr || '0') + this : this;
    };

    var enddateFormat = [lastday.getDate().padLeft(),
        (lastday.getMonth() + 1).padLeft(),
        lastday.getFullYear()].join('/') + " 23:59";
    var startdateFormat = [firstday.getDate().padLeft(),
        (firstday.getMonth() + 1).padLeft(),
        firstday.getFullYear()].join('/') + " 00:00";


    var report_code = 'GPSJ'
    if (paramreport_code != null){
        report_code = paramreport_code;
    }
    return {
        AssetList: assetList.join(","),
        ReportCode: report_code,
        DateFrom:  startdateFormat,
        DateTo:enddateFormat,
        LastReported: 0,
        ShowAll: showAll,
        SpeedTreshold: 0.00,
        ReportType: ' ',
        FuelPricePerLiter: 0,
        ChartType: 'n/a',
        DropSerialized: false
    };
}
var fullChartObject = null;
function LoadReport(report_code, DivId, assetid, chartObject) {
    fullChartObject = chartObject;
    var ajax_data = GetReportParams(report_code,DivId,assetid);

    var id = DivId.toString().match(numberPattern)[0];
    globalscrollpos = $('#parent' + id).position();
    parent.showLoading(true);
    $.ajax({
        url: SVC_DataServicePath() + 'GenerateReport',
        type: 'POST',
        data: JSON.stringify(ajax_data),
        contentType: 'application/json; charset=utf-8',
        dataType: 'json',
        success: function (data) {
            //var rdata = JSON.parse(data.d);
            parent.showLoading(false);
            var rdata = data.d;
            if (rdata.ErrorMessage != null) {

                parent.notifyError(rdata.ErrorMessage);
            } else {
                //load data
                $('#container_reportContent').show();
                $('#main').hide();
                var reportParams = GetReportParams(report_code, DivId, assetid);
                
                $('#container_reportContent').html('');
                $("#container_reportContent").html(rdata);
                //svc_base_path
                if (report_code != null) {
                    rdata.TemplatePath = svc_base_path + 'template/reports/GPSJ.html';
                    rdata.TemplatePath = rdata.TemplatePath.replace('GPSJ',report_code)
                }
                else {
                    rdata.TemplatePath = svc_base_path + 'template/reports/GPSJ.html';
                }
                $('#container_reportContent').setTemplateURL(rdata.TemplatePath + '?i=' + Date().toString(), null, { filter_data: false });
                $('#container_reportContent').setTemplateURL(rdata.TemplatePath, null, { filter_data: false });
                if (report_code != null) {
                    $("#container_reportContent").setParam('ReportName', report_code);
                }

                else {
                    $("#container_reportContent").setParam('ReportName', 'Journey Report');
                }
                
                $("#container_reportContent").setParam('dateFrom',reportParams.DateFrom);
                $("#container_reportContent").setParam('dateTo', reportParams.DateTo);
                $("#container_reportContent").setParam('FuelUnit', '');
                $("#container_reportContent").setParam('FuelUnitShort', '');
                $("#container_reportContent").setParam('Distance', '');
                $("#container_reportContent").setParam('SpeedUnit','');
                $("#container_reportContent").setParam('ChartType', reportParams.ChartType);

                $('#container_reportContent').processTemplate(rdata.ReportData);
                

                parent.ShowFulllScreenModal("Reports", $('#container_reportContent').html());
                $('#container_reportContent').hide();
                parent.showLoading(false);
                //jQuery('#container_reportContent .make-table-sticky').stickyTableHeaders({ fixedOffset:0 });
                jQuery('#container_reportContent').scroll(function () {
                    jQuery(window).trigger('resize.stickyTableHeaders');
                });


            }




        },
        error: function (request, status, error) {
            parent.notifyError('Loading failed!');
            parent.showLoading(false);
        }
    });
}
function ToggleReportArea(elLink) {
    var assetID = elLink.id.replace("asset_", "");
    if ($(elLink).html() == '<i class="fa fa-caret-square-o-up no-print"></i>') {
        $(elLink).html('<i class="fa fa-caret-square-o-down no-print"></i>');
        $("#tbl_" + assetID).hide();
    } else {
        $(elLink).html('<i class="fa fa-caret-square-o-up no-print"></i>');
        $("#tbl_" + assetID).show();
    }
}


function loadFullScreenChart(winTitle,chartobj) {
    
    
    
    //$('#container_chart1000').show();
    parent.ShowFulllScreenModal(winTitle, $('#container_chart1000').html(), chartobj);
}
function showFullScreenChart(){
    
}
var scrollpos = 0;
function FullDashBoardModal(FullScreenMode, divId, AssetId, chartobj) {
    
    window.FullScreenMode = FullScreenMode;
    window.divId = divId;
    window.AssetId = AssetId;
    window.chartobj = chartobj;
    var id = divId.toString().match(numberPattern)[0];

    globalscrollpos = $('#parent' + id).position();

    if (window.FullScreenMode == 'rpt') {
        loadFullScreenChart('Report',window.chartobj);
    }
    else {
        loadFullScreenChart('Charts',window.chartobj);
    }
    
    
}

var globalscrollpos=0;
function setCloseEvent() {
    
//    $('body').scrollTop(parent.scrollposition);
    $('#main').show();
   
    // console.log(scolltpmp);
    if (globalscrollpos.top != 0) {
        $('html, body').animate({ scrollTop: globalscrollpos.top }, 500);

    }

}
function showFullScreenForChart(lnkobj) {
    parent.isIFrame = false;
    var id = $(lnkobj).attr('id').toString().match(numberPattern)[0];
    //parent.scrollposition = $(window).scrollTop();
    //console.log(scrollposition);
    //$('#main').hide();
    var chartofind = 'firstTrendChart' + id;
    globalscrollpos = $('#parent' + id).position();

    //console.log(renderedchartobjects);
    var chartid = renderedchartobjects.contains(chartofind);
    if (chartid >= 0) {
        var chartobj = renderedchartobjects[chartid];
      FullDashBoardModal('chart', chartofind, '', chartobj)
        //FullDashBoardModal(FullScreenMode, divId, AssetId, chartobj)
        var modal = document.getElementById('basicModal');
         // var options = {
         //   "backdrop": "static"
        //};
        //modal.style.display = "block";
        //$('#basicModal').modal('show');
        //$('#fullScreenChart').modal('show');

        
    }

    


}

function updateCharts(selecedGroupAssetId) {

    //console.log('updating charts');
    if (currentAssetGroup != selecedGroupAssetId) {
        var divcount = $("[id^=chartsDialog]").length;




        for (var i = 0; i < divcount; i++) {
            if (!$("#chartsDialog" + i).hasClass('flipped')) {

                
                showChart(null, "chartsDialog" + i,false);
            }

            
        }
        parent.showLoading(false);
    }
}
var ischartsloading = false;
function storevalue(ddlvalue) {


}

var updatedcharts = [];


function removeParent(lnkObj) {
    var id = $(lnkObj).attr('id').toString().match(numberPattern)[0];
    var chartdialogid = 'parent' + id;

    var divscreated = $("[id^=parent]").length;
    
    $('#parent' + id).html('');
    $('#parent' + id).remove();
    id =id+1
    divscreated = $("[id^=parent]").length;

    var rowscount = $('.parentrow').length;
    var updatedcharts= []
    for (var i = 0; i < divscreated; i++) {
        
        var objectchart = { id: i, dialoghtml: $("[id^=parent]")[i] }
        updatedcharts.push(objectchart);
        //console.log(updatedcharts)
    }
    $('#main').html('');
    var lastrow = null;
    var rows = 0;

    for (var iparent = 0; iparent < updatedcharts.length; iparent++) {
        if (iparent % 2 == 0) {
            $('#main').append('<div class="row parentrow"></div>');
            rows = $('#main .parentrow').length - 1;
            lastrow = $('#main .parentrow')[rows];
        }
        var objchart = updatedcharts[iparent];
        $(lastrow).append(objchart.dialoghtml.outerHTML);
    }

}

function fliptoChart(lnkObj) {
    var id = $(lnkObj).attr('id').toString().match(numberPattern)[0];

    $('#chartsDialog' + id).addClass('flipped');
    $('#chartsDialog' + id).hide();
    $('#NoResultDialog' + id).hide();
    $('#firstTrendChart' + id).html('');
    $('#1stChartTitle').hide();




    $('#chartHeading' + id).hide();
    $('#settingDialog' + id).show();
    var scolltpmp = $('#parent' + id).position();
   // console.log(scolltpmp);
    if (scolltpmp.top != 0) {
        $('html, body').animate({ scrollTop: scolltpmp.top }, 500);

    }
    //var height = parseInt($('#settingDialog' + id)[0].scrollHeight);
    //if (height < 0) {
    //    height - Math.abs(height);
    //}
    
}

function changeRanking(objRanking) {
    var idRanking = $(objRanking).attr('id').toString();
    var id = $(objRanking).attr('id').toString().match(numberPattern)[0];

   
}
var chartsetting = {};
var currentAssetGroup = 0;
var isdatafetching = false;
var intervalHandler = {};
var currentGroupBy = '';

function saveCharts(id) {

        
        if ($('#ChartDbId' + id).val() == '-1') {

            saveChartSettings($('#ddlMatricType' + id).val(), $('#ddlRanking' + id).val(), $('#ddlShow' + id).val(), $('#ddlSize' + id).val(), '#firstTrendChart' + id, $('#ddlTime' + id).val());
        } else {
            UpdateChartSettings($('#ddlMatricType' + id).val(), $('#ddlRanking' + id).val(), $('#ddlShow' + id).val(), $('#ddlSize' + id).val(), '#firstTrendChart' + id, $('#ddlTime' + id).val(),parseInt($('#ChartDbId' + id).val()));
        }
    
    
   


}
function getChartPrefix(id) {
    var KPiSelection = $('#ddlMatricType' + id + ' :selected').text().replace(/^\s\s*/, '').replace(/\s\s*$/, '');
    var chartprefix =''
    switch (KPiSelection) {
        case "Driver Score Speeding":
        case "Driver Score Over RPM":
        case "Driver Score MPG":
        case "Driver Score HB":
        case "Total Driver Score":
            chartprefix = '%';
            break;

        case "Vehicle MPG, Vehicle Target MPG":
        case "Fleet MPG. Fleet Target MPG":
        case "Vehicle Fuel Card MPG, Vehicle Fuel Card MPG Target":
        case "Plot Chart - Fleet MPG":
            chartprefix = 'MPG';
            break;
       
        case "Co2 Fleet":
        case "Co2 Vehicle":
            chartprefix="Kg"
            break;
        case "Vehicle Miles per HB":
        case "Vehicle Miles per HA":
            chartprefix = "Miles"
            break;
        case "Vehicle Idling Time":
        case "Vehicle Xidling Time":
            chartprefix = "hh:mm:ss";
            break;
        case "Accel Harsh L":
        case "Accell Harsh R":
            chartprefix = "Count"
            break;

        case "Accel Harsh L":
        case "Accell Harsh R":
            chartprefix = "Count"
            break;
        case "Distance":
            chartprefix = 'Miles';
            break;
        case "Plot Chart - Fuel Cost per month (£)":
        case "Plot Chart - Fuel Wasted on idle Cost per month (£)":

            chartprefix = '£';
            break;
    }
    return chartprefix;
}
function validateDashboardSetting(lnkobj, rawid) {
    var id = 0;
    if (lnkobj == undefined ||  lnkobj== null) {
        id = rawid.match(numberPattern)[0];
    }
    else {
        id = $(lnkobj).attr('id').toString().match(numberPattern)[0];
    }
    
   
    var objchartselection = document.getElementById("ddlRanking" + id).getElementsByTagName("option");
    var KPiSelection = $('#ddlMatricType' + id + ' :selected').text();
    //console.log(KPiSelection);
    for (var i = 0; i < objchartselection.length; i++) {
        var chartIndex = objchartselection[i].value.split('~')[0];
        switch (KPiSelection) {
            case "Vehicle MPG, Vehicle Target MPG":
            case "Fleet MPG. Fleet Target MPG" :
            case "Vehicle Fuel Card MPG, Vehicle Fuel Card MPG Target":
                if (chartIndex == '5' || chartIndex == '3')
                    objchartselection[i].disabled = false;
                else
                    objchartselection[i].disabled = true;

                break;
            case "Co2 Fleet":
                if (chartIndex == '1' || chartIndex == '2' || chartIndex == '6')
                    objchartselection[i].disabled = false;
                else
                    objchartselection[i].disabled = true;

                kpiprefix = 'Liters';
                break;
            case "Distance":
                kpiprefix = 'Km';
                if (chartIndex == '1' || chartIndex == '2' )
                    objchartselection[i].disabled = false;
                else
                    objchartselection[i].disabled = true;
                break;
            case "Co2 Vehicle":
            case "Vehicle Miles per HB":
            case "Vehicle Miles per HA":
            case "Vehicle Idling Time":
            case "Vehicle Xidling Time":
            case "Accel Harsh L":
            case "Accell Harsh R":
            case "Driver Score Speeding":
            case "Driver Score Over RPM":
            case "Driver Score MPG":
            case "Driver Score HB":
            case "Total Driver Score":
                if (chartIndex == '1' || chartIndex == '2')
                    objchartselection[i].disabled = false;
                else
                    objchartselection[i].disabled = true;
                kpiprefix = 'Kg';
                break;
            case "Driver Score Speeding":
            case "Driver Score Over RPM":
            case "Driver Score MPG":
            case "Driver Score HB":
                if (chartIndex == '1' || chartIndex == '2')
                    objchartselection[i].disabled = false;
                else
                    objchartselection[i].disabled = true;
                kpiprefix = 'Kg';

                $('#ddlMatricType' + id).val('1');

                break;

            case "Plot Chart - Fleet MPG":
                if (chartIndex == '6' )
                    objchartselection[i].disabled = false;
                else
                    objchartselection[i].disabled = true;
                kpiprefix = 'MPG';

                
                break;
        }
   
    }
    objchartselection = document.getElementById("ddlTime" + id).getElementsByTagName("option");
    if (KPiSelection == "Fleet MPG. Fleet Target MPG") {
        for (var i = 0; i < objchartselection.length; i++) {
            if (i == 4) {
                objchartselection[i].disabled = false;

            }
            else {
                objchartselection[i].disabled = true;
            }
        }
    }
    else {
        for (var i = 0; i < objchartselection.length; i++) {
            objchartselection[i].disabled = false;

        }

    }

}

function getUserChartSettings() {

    console.log('rendering user settings' + new Date().getMilliseconds());
    $('#popupchart').modal('show');
    var datanull = true;
    $('#parent1').html('');
    parent.showLoading(true);
    $.ajax({
        url: SVC_DataServicePath() + 'getCharts',
        type: 'POST',
        contentType: 'application/json; charset=utf-8',
        dataType: 'json',

        async: false,
        success: function (data) {
            var isnewrow = false;
            console.log('rendering user settings fetching complet' + new Date().getMilliseconds());
            var fulltemplate = addChartDialogTeemplate;
            var addmoretemplate = addMoreDialogTemplate;
            var id = 0;
            var divcount = 0;
            var rowslength = 0;
            parent.showLoading(false);
            $(data.d).each(function (index, item) {
                settingDialogCounter = id;
                var templatewithids = '';
                datanull = false;
                divcount = $("[id^=parent]").length-1;

                if (id == 0) {
                    divcount = 0;
                    $('#parent0').html('');
                    settingDialogCounter = 0;
                    templatewithids = replaceIds(fulltemplate)
                    $('#parent0').append(templatewithids);

                    document.getElementById('settingDialog' + divcount).style.display = 'block';
                    document.getElementById('chartsDialog' + divcount).style.display = 'none';
                    if (data.d.length == 1) {
                        datanull = true;
                    }
                }
                else if (id == 1) {
                    $('#parent' + divcount).html('');
                    settingDialogCounter =divcount;
                    templatewithids= replaceIds(fulltemplate)
                    $('#parent' + divcount).html(templatewithids);
                    $('#parent' + divcount).removeClass('addMoreDiv');
                    $('#parent' + divcount).addClass('col-md-6 col-lg-6 newrow');
                    document.getElementById('settingDialog' + divcount).style.display = 'block';
                    document.getElementById('chartsDialog' + divcount).style.display = 'none';
                }
                else {
                    var divcount = $("[id^=parent]").length;
                    if (divcount % 2 != 0) {
                        divcount = $("[id^=parent]").length;
                        var rows = $('#main .parentrow').length - 1;
                        var lastrow = $('#main .parentrow')[rows];

                        $(lastrow).append('<div id="parent' + divcount + '">');
                        
                        settingDialogCounter = divcount;
                        templatewithids = replaceIds(fulltemplate);

                        $('#parent' + divcount).html('');
                        $('#parent' + divcount).html(templatewithids);
                        $('#parent' + divcount).removeClass('addMoreDiv');
                        $('#parent' + divcount).addClass('col-md-6 col-lg-6 newrow');
                        $('#settingDialog' + divcount).show();
                        $('#chartsDialog' + divcount).hide();
                        //document.getElementById('settingDialog' + divcount).style.display = 'block';
                      //  document.getElementById('chartsDialog' + divcount).style.display = 'none';
                    }
                    else {
                        $('#main').append('<div class="row parentrow"></div> ');
                        var rows = $('#main .parentrow').length - 1;
                        var lastrow = $('#main .parentrow')[rows];
                        settingDialogCounter = divcount;
                        $(lastrow).append('<div id="parent' + divcount + '">');
                        
                        
                        templatewithids = replaceIds(fulltemplate);

                        $('#parent' + divcount).html('');
                        settingDialogCounter = divcount;
                        templatewithids = replaceIds(fulltemplate);

                        $('#parent' + divcount).html(templatewithids);
                        $('#parent' + divcount).removeClass('addMoreDiv');
                        $('#parent' + divcount).addClass('col-md-6 col-lg-6 newrow');

                        document.getElementById('settingDialog' + divcount).style.display = 'block';
                        document.getElementById('chartsDialog' + divcount).style.display = 'none';
                    }
                }

                var objchartselection = document.getElementById("ddlMatricType" + divcount).getElementsByTagName("option");
                    
                for (var i = 0; i < objchartselection.length; i++) {
                    var chartIndex = objchartselection[i].value.split('~')[0];
                    if (chartIndex == item.ChartTitleId) {
                        $('#ddlMatricType' + divcount).val(objchartselection[i].value);
                        showValuesPerKPI('#ddlMatricType' + divcount);
                        break;
                    }

                }
                objchartselection = document.getElementById("RanlingType" + divcount).getElementsByTagName("option");
                for (var i = 0; i < objchartselection.length; i++) {
                    //console.log(objchartselection[i].innerText);
                    if (objchartselection[i].innerText == item.RankingDurationCode) {
                        $('#RanlingType' + divcount).val(objchartselection[i].value);
                        break;
                    }
                    
                    
                }
                $('#ddlRanking' + divcount).val(item.ChartTypeId);
                
                $('#ddlTime' + divcount).val(item.DurationId);
                $('#ddlShow' + divcount).val(item.GroupId);
                $('#ddlSize' + divcount).val(item.SizeId);
                $('#ChartDbId' + divcount).val(item.Id);
                console.log('rendering user settings  complete for chart'  + divcount + new Date().getMilliseconds());
                //$('#RanlingType' + divcount).text(item.RankingDurationCode);
                console.log('rendering chart for' + divcount + new Date().getMilliseconds());
                showChart(null, 'firstTrendChart' + id, false);



                id++;

            });
            var divcount = $("[id^=parent]").length-1;
            if (divcount % 2 == 0 ) {
                divcount++;
                var rows = $('#main .parentrow').length - 1;
                var lastrow = $('#main .parentrow')[rows];

                $(lastrow).append('<div id="parent' + divcount + '">');
                $('#parent' + divcount).addClass('col-md-6 addMoreDiv');
                $('#parent' + divcount).append(addmoretemplate);



            }
            else if (datanull == true) {
                
                 $('#parent1').addClass('col-md-6 addMoreDiv');
                 $('#parent1').append(addmoretemplate);

            }
            else {
                divcount++;
                $("#main").append("<div class='parentrow'></div>");
                var rows = $('#main .parentrow').length - 1;
                var lastrow = $('#main .parentrow')[rows];

                $(lastrow).append('<div id="parent' + divcount + '">');
                
                $('#parent' + divcount).addClass('col-md-6 addMoreDiv');
                $('#parent' + divcount).append(addmoretemplate);

            }

        }
    });
    $('#popupchart').modal('hide');
    parent.showLoading(false);
}

function replaceIds(rawtemplate) {
    var templatedialoghtml = rawtemplate;


    ////console.log('after populating div with template');
    templatedialoghtml = templatedialoghtml.replace('id="settingDialog"', 'id="settingDialog' + settingDialogCounter + '"');
    templatedialoghtml = templatedialoghtml.replace("chartsDialog", "chartsDialog" + settingDialogCounter);
    templatedialoghtml = templatedialoghtml.replace("lnkSettings", "lnkSettings" + settingDialogCounter);

    templatedialoghtml = templatedialoghtml.replace('id="tempTClose"', 'id="tempTClose' + settingDialogCounter + '"');
    templatedialoghtml = templatedialoghtml.replace('id="TemperatureTagpopBtn"', 'id="TemperatureTagpopBtn' + settingDialogCounter + '"');
    templatedialoghtml = templatedialoghtml.replace('id="ddlMatricType"', 'id="ddlMatricType' + settingDialogCounter + '"');
    templatedialoghtml = templatedialoghtml.replace("ddlRanking", "ddlRanking" + settingDialogCounter);
    templatedialoghtml = templatedialoghtml.replace("RanlingType", "RanlingType" + settingDialogCounter);
    templatedialoghtml = templatedialoghtml.replace('id="ddlShow"', 'id="ddlShow' + settingDialogCounter + '"');
    templatedialoghtml = templatedialoghtml.replace(' id="ddlTime"', ' id="ddlTime' + settingDialogCounter + '"');
    templatedialoghtml = templatedialoghtml.replace("chartHeading", "chartHeading" + settingDialogCounter);
    templatedialoghtml = templatedialoghtml.replace("firstTrendChart", "firstTrendChart" + settingDialogCounter);
    templatedialoghtml = templatedialoghtml.replace('id="iconsettings"', 'id="iconsettings"' + settingDialogCounter);
    templatedialoghtml = templatedialoghtml.replace('id="ddlSize"', 'id="ddlSize' + settingDialogCounter + '"');
    templatedialoghtml = templatedialoghtml.replace('id="iconDelete"', 'id="iconDelete' + settingDialogCounter + '"');
    templatedialoghtml = templatedialoghtml.replace('id="WeekDuration"', 'id="WeekDuration' + settingDialogCounter + '"');
    templatedialoghtml = templatedialoghtml.replace('id="GetData"', 'id="GetData' + settingDialogCounter + '"');
    templatedialoghtml = templatedialoghtml.replace('id="ChartDbId"', 'id ="ChartDbId' + settingDialogCounter + '"');
    templatedialoghtml = templatedialoghtml.replace('id="loader"', 'id="loader' + settingDialogCounter + '"');
    templatedialoghtml = templatedialoghtml.replace('id="ChartDbId"', 'id="ChartDbId' + settingDialogCounter + '"');
    templatedialoghtml = templatedialoghtml.replace('id="fulScreen"', 'id="fulScreen' + settingDialogCounter + '"');
    templatedialoghtml = templatedialoghtml.replace('id="NoResultDialog"', 'id="NoResultDialog' + settingDialogCounter + '"');
    templatedialoghtml = templatedialoghtml.replace('id="nolnkSettings"', 'id="nolnkSettings' + settingDialogCounter + '"');

    //id="ChartDbId0"
    //"fulScreen"
    return templatedialoghtml;
}


var numberPattern = /\d+/g;
var renderedchartobjects = [];
var scrollposition = {};
var currentHeading = '';
var currentDuration = '';
function showChart(btnObj, rawId, isupdateable) {
    var id = 0;
    
    
    
    if (!btnObj) {
        id = rawId.match(numberPattern)[0];
    } else {
        id = $(btnObj).attr('id').toString().match(numberPattern)[0];
    }

    console.log($('#ddlRanking' + id + ' option:selected').attr('disabled'));
    //if ($('#ddlRanking'+id ))


    if ($('#ddlRanking' + id + ' option:selected').attr('disabled') == 'disabled') {
        parent.notifyError('Data for kPI cannot be displayed in current chart selected type');
        return;
    }
    if ($('#ddlTime' + id + ' option:selected').attr('disabled') == 'disabled') {
        parent.notifyError('Current Time Duration is Disabled for this KPI');
        return;
    }

    if ($('#ddlMatricType' + id).val() == '1' && $('#ddlRanking' + id).val() == '3') {

        
        parent.notifyError('Data for Distance Chart cannot be displayed in Gauge Chart');
        return;
    }
    var savechartssett = false;

    if (isupdateable == true) {
        savechartssett = true;

    }



    if (parent.selectedAssetGroupID == 0) { // cauisng problem when loading all assets for root parent group asset

        $('#loader' + id).hide();
        return;
    }
    $('#loader'+id).show();
    $('#chartsDialog' + id).removeClass('flipped');
    $('#chartsDialog' + id).show();
    $('#chartHeading' + id).show();
    $('#settingDialog' + id).hide();
    var titletodelete = $('#ddlTime' + id + ' :selected').text() + ' ' + $('#ddlMatricType' + id + ' :selected').text() + ' ' + $('#RanlingType' + id + ' :selected').text();
    var chartheader = '<span class="pull-right"> <a href="#"  ><icon id="fulScreen' + id + '" class="fa fa-desktop newclass-for-i" style="font-size:1.7em;" aria-hidden="true" onclick ="showFullScreenForChart(this);"></i></a>&nbsp;&nbsp;<a  href="#" style="text-decoration:none;"><i id="iconDelete' + id + '" data-name="' + titletodelete + '"  data-id="' + id + '" class="fa fa-trash-o fa-2x" aria-hidden="true" onclick= "showDelete(this); return false;"></i> </a><a id="lnkSettings' + id + '"  href="#"  onclick="return false;" >  <i id="iconsettings' + id + '" class="fa fa-cog fa-2x" aria-hidden="true" onclick="fliptoChart(this); return false;"></i></a> </span> [ChartTitle] ';
    chartheader = chartheader.replace('[ChartTitle]', $('#ddlMatricType' + id + ' :selected').text());
    ////console.log(chartheader);
    chartsetting = {};
    $('#chartHeading' + id).html(chartheader);
    
    chartsetting.chartId = $('#firstTrendChart' + id).attr('id');
    chartsetting.AssetGroupId = 0;
    chartsetting.DurationId = $('#ddlTime' + id).val();
    chartsetting.chartitle = $('#ddlMatricType' + id + ' :selected').text();
    chartsetting.GroupingId = $('#ddlShow' + id).val();
    chartsetting.periodText = $('#ddlTime' + id + ' :selected').text();
    chartsetting.RankingDurationId = $('#ddlRanking' + id).val();
    chartsetting.ChartType = $('#ddlRanking'+id +' :selected').text();
    chartsetting.UnitID = 0;
    chartsetting.settingdialogid = $('#ddlSize' + id + ' :selected').text();
    preConfigDialog.id = 'chartsDialog' + 'id';
    renderedchartobjects.push(chartsetting)
    var currentval = $('#ddlTime' + id).val();
    var previousvalue = $('#WeekDuration' + id).val();
    

    
    if (currentval != previousvalue) {
        $('#GetData' + id).val('true');
        $('#WeekDuration' + id).val(currentval);
    }
    else {
        
    }

    if (savechartssett) {
        saveCharts(id);

    }

    var selectedgroupby = $('#ddlShow' + id).val();
    if ($('#ddlMatricType' + id + ' :selected').text() == 'Distance') {
        chartsetting.chartitle = $('#RanlingType' + id + ' :selected').text() + ' ' + $('#ddlShow' + id + ' :selected').text() + '' + $('#ddlTime' + id + ' :selected').text() + ' ' + $('#ddlMatricType' + id + ' :selected').text();
    }
    else if ($('#ddlMatricType' + id + ' :selected').text() == 'Plot Chart - Fleet MPG' || $('#ddlMatricType' + id + ' :selected').text() == 'Co2 Fleet') {
        chartsetting.chartitle = $('#ddlMatricType' + id + ' :selected').text();
    }
    else {
        chartsetting.chartitle = $('#RanlingType' + id + ' :selected').text() + ' ' + $('#ddlTime' + id + ' :selected').text() + ' ' + $('#ddlMatricType' + id + ' :selected').text();
    }
    var previousheading = $('#ddlMatricType' + id + ' :selected').text();
   
    if (currentHeading != previousheading) {
        GetGenericChart(chartsetting.chartitle, chartsetting.settingdialogid, chartsetting.chartId, $('#ddlRanking' + id + ' :selected').text(), chartsetting.AssetGroupId, chartsetting.DurationId, chartsetting.GroupingId, chartsetting.RankingDurationId);
        currentHeading = previousheading;
        return;
    }
    var previousduration =$('#ddlTime'+id+' :selected').text();
    if (currentDuration != previousduration){
        GetGenericChart(chartsetting.chartitle, chartsetting.settingdialogid, chartsetting.chartId, $('#ddlRanking' + id + ' :selected').text(), chartsetting.AssetGroupId, chartsetting.DurationId, chartsetting.GroupingId, chartsetting.RankingDurationId);
        currentDuration = previousduration;
        return;
    
    }
    
    if (currentGroupBy != selectedgroupby) {
        GetGenericChart(chartsetting.chartitle, chartsetting.settingdialogid, chartsetting.chartId, $('#ddlRanking' + id + ' :selected').text(), chartsetting.AssetGroupId, chartsetting.DurationId, chartsetting.GroupingId, chartsetting.RankingDurationId);
        
        currentGroupBy = selectedgroupby;
        return;
    }
    if (currentAssetGroup != parent.selectedAssetGroupID) {
        currentAssetGroup = parent.selectedAssetGroupID;

    

        GetGenericChart(chartsetting.chartitle, chartsetting.settingdialogid, chartsetting.chartId, $('#ddlRanking' + id + ' :selected').text(), chartsetting.AssetGroupId, chartsetting.DurationId, chartsetting.GroupingId, chartsetting.RankingDurationId);
        return;
    }
     
    
    if ($('#GetData' + id).val() == 'true') {
      // //console.log('calling c# method');
        if ($('#ChartDbId' + id).val() == -1) {
        //    $('#ChartDbId' + id).val('1');
        }
        else {
        }
        isdatafetching = true;
        //GetChartDistanceData(chartsetting.chartitle, chartsetting.settingdialogid, chartsetting.chartId, $('#ddlRanking' + id + ' :selected').text(), chartsetting.AssetGroupId, chartsetting.DurationId, chartsetting.GroupingId, chartsetting.RankingDurationId);
    }
    else {
            chartsetting.xAxisData = globalDriverName;
            chartSettings.YAxisData = globalDistanceData;
            chartSettings.AssetIds = globalAssetId;
            chartSettings.DriverIds = globalAssetId;
        
     //       GetChartDistanceData(chartsetting.chartitle, chartsetting.settingdialogid, chartsetting.chartId, $('#ddlRanking' + id + ' :selected').text(), chartsetting.AssetGroupId, chartsetting.DurationId, chartsetting.GroupingId, chartsetting.RankingDurationId);
            populatechart(chartsetting.chartId, chartsetting.chartitle, $('#ddlRanking' + id + ' :selected').text(), chartsetting.settingdialogid);
        
            
        
            parent.showLoading(false);
    }
    
    chartsetting.xAxisData = globalDriverName;
    chartSettings.YAxisData = globalDistanceData;
    chartSettings.AssetIds = globalAssetId;
    chartSettings.DriverIds = globalAssetId;

    //SeriesData = { name: chartitle, data: tmparr };
    populatechart(chartsetting.chartId, chartsetting.chartitle, $('#ddlRanking' + id + ' :selected').text(), chartsetting.settingdialogid);
    console.log('completed rendering chart for ' + chartsetting.chartId + '  duration  ' + new Date().getMilliseconds());
    
}

function saveChartSettings(ChartTitleId, ChartTypeId, GroupId, SizeId, ChartHtmlId, DurationId) {

    //saveChartSettings(int ChartTitleId, int ChartTypeId, string RankingDurationCode, int GroupId, int DurationId, int SizeId,  string ChartHtmlId, int dialogtoggle)

    var splitedcharttiteid = ChartTitleId.split('~')[0];
    var id = ChartHtmlId.match(numberPattern)[0]
    var rakncode =$('#RanlingType'+id + ' :selected').text()
    var ajax_data = { "ChartTitleId": splitedcharttiteid, "ChartTypeId": ChartTypeId, "RankingDurationCode": rakncode, "GroupId": GroupId, "DurationId": DurationId, "SizeId": SizeId, "ChartHtmlId": ChartHtmlId, "dialogtoggle": 0 };
    $.ajax({
        url: SVC_DataServicePath() + 'saveChartSettings',
        type: 'POST',
        contentType: 'application/json; charset=utf-8',
        dataType: 'json',
        data: JSON.stringify(ajax_data),
        async: false,
        success: function (data) {
            var dbid = data.d.split("=")[1];
            $('#ChartDbId' + id).val(dbid);
            //console.log(data.d);

        }
    });
}
function UpdateChartSettings(ChartTitleId, ChartTypeId, GroupId, SizeId, ChartHtmlId, DurationId, ChartId) {

    //saveChartSettings(int ChartTitleId, int ChartTypeId, string RankingDurationCode, int GroupId, int DurationId, int SizeId,  string ChartHtmlId, int dialogtoggle)
    var id = ChartHtmlId.substring(ChartHtmlId.length - 1);
    var splitedcharttiteid = ChartTitleId.split('~')[0];

    var rakncode = $('#RanlingType' + id + ' :selected').text()
    var ajax_data = { "ChartTitleId": splitedcharttiteid, "ChartTypeId": ChartTypeId, "RankingDurationCode": rakncode, "GroupId": GroupId, "DurationId": DurationId, "SizeId": SizeId, "ChartHtmlId": ChartHtmlId, "dialogtoggle": 0, "id": ChartId };
    $.ajax({
        url: SVC_DataServicePath() + 'UpdateChartSettings',
        type: 'POST',
        contentType: 'application/json; charset=utf-8',
        dataType: 'json',
        data: JSON.stringify(ajax_data),
        async: false,
        success: function (data) {

            

        }
    });
}

function DeleteCharts(ChartId) {

    //saveChartSettings(int ChartTitleId, int ChartTypeId, string RankingDurationCode, int GroupId, int DurationId, int SizeId,  string ChartHtmlId, int dialogtoggle)
    var ajax_data = { "ChartId": ChartId };
    $.ajax({
        url: SVC_DataServicePath() + 'DeleteCharts',
        type: 'POST',
        contentType: 'application/json; charset=utf-8',
        dataType: 'json',
        data: JSON.stringify(ajax_data),
        async: false,
        success: function (data) {



        }
    });
}

var isnewrow = false;
var dividcount = 2;
var isloading = true;
function addMoreChat(lnkObj) {
    



    var templatedialoghtml = addChartDialogTeemplate;
    var divcount = $("[id^=parent]").length-1;
    settingDialogCounter = divcount;
    
    
    //  //console.log(rowslength);
    var parentDiv = $('.parentrow');
    if (divcount == 0) {
        
        $("[id^=parent]")[0].id = 'parent0';
        //console.log($("[id^=parent]"));
        $('#parent' + divcount).addClass('col-md-6 col-lg-6 newrow');
        settingDialogCounter = divcount;
        templatedialoghtml = replaceIds(addChartDialogTeemplate);
        $('#parent' + settingDialogCounter).html('');
        $('#parent' + settingDialogCounter).html(templatedialoghtml);
        $('#settingDialog' + divcount).show();
        $('#chartsDialog' + divcount).hide();
        showValuesPerKPI(null, settingDialogCounter);
        settingDialogCounter++
        $(parentDiv).append('<div id="parent' + settingDialogCounter + '" class="col-md-6 col-md-height col-lg-6 addMoreDiv"></div>');
        $('#parent' + settingDialogCounter).append(addMoreDialogTemplate);
        
        return;

    }

    
  
        
        if (divcount % 2 == 0) {
            var rows = $('#main .parentrow').length - 1;
            var lastrow = $('#main .parentrow')[rows];

            $('#parent' + divcount).html('');
            $('#parent' + divcount).addClass('col-md-6 col-lg-6 newrow');

            settingDialogCounter = divcount;
            templatedialoghtml = replaceIds(addChartDialogTeemplate);

            $('#parent' + divcount).html(templatedialoghtml);
            showValuesPerKPI(null, divcount);
            $('#settingDialog' + divcount).show();
            $('#chartsDialog' + divcount).hide();
            $('#parent' + divcount).removeClass('addMoreDiv');
            divcount++;
            $(lastrow).append('<div id="parent' + divcount + '" class="col-md-6 col-md-height col-lg-6 addMoreDiv" ></div>');
            $('#parent' + divcount).append(addMoreDialogTemplate);
            
            return;

            
        }
        else {
            settingDialogCounter = divcount;
            templatedialoghtml = replaceIds(addChartDialogTeemplate);
            $('#parent' + divcount).html(templatedialoghtml);
            $('#settingDialog' + divcount).show();
            $('#chartsDialog' + divcount).hide();
            $('#main').append('<div class="row parentrow"></div> ');
            var rows = $('#main .parentrow').length - 1;
            var lastrow = $('#main .parentrow')[rows];
            divcount++;
            $(lastrow).append('<div id="parent' + divcount + '" class="col-md-6 col-md-height col-lg-6 addMoreDiv" ></div>');

            $('#parent' + divcount).append(addMoreDialogTemplate);


            


        }
        
        

    


    $("lnkSettings" + settingDialogCounter).on('click', function () {


        fliptoChart(this);
        var scolltpmp = $('.parentrow:Last')
        console.log(scolltpmp.scrollTop());
        //$('#main').scrollTop()
    });

    $('#' + "settingDialog" + settingDialogCounter).show();
    showValuesPerKPI(null, settingDialogCounter);

    settingDialogCounter = settingDialogCounter + 1;

   
    var el = document.querySelector('iframeborder');
    console.log($("body").scrollTop());
    if ($("body").scrollTop() != 0) {
        $('html, body').animate({ scrollTop: $("body").scrollTop() + 300 }, 500);

    }
    return false;

}

$('#chart1settng').on('click', function (e) {

    $('#1stcard').addClass('flipped');
    $('#firstTrendChart').html('');
    $('#1stChartTitle').hide();
});
$('#tempTClose').on('click', function (e) {
    $('#1stcard').removeClass('flipped');
    setTrendChart('firstTrendChart');
    $('#1stChartTitle').show();

});
$('#TemperatureTagpopBtn').on('click', function (e) {
    $('#1stcard').removeClass('flipped');
    var chartType = $('#ddlRanking option:selected').text();
    $('#1stChartTitle').show();
    if (chartType == 'Trend') {

        setTrendChart('firstTrendChart');
    }
    if (chartType == 'Gauge') {
        setGaugeChart('firstTrendChart');
    }
    if (chartType == 'Ranking') {
        setRankingData('');
        setGroupingChart('firstTrendChart');
    }



});
function setRankingData(durationId) {
    xAxisData = [];
    YAxisData = [];
    SeriesData = [];
    counter = 0;
    d = new Date();

    xAxisData.push('Paul Deeney');
    xAxisData.push('Edgar B');
    xAxisData.push('CJ C');
    xAxisData.push('MICK Mulligan');
    xAxisData.push('Alexas Kurcevos');
    xAxisData.push('Paul Deeney Jr');
    xAxisData.push('Edgar B Jr');
    xAxisData.push('CJ C Jr');
    xAxisData.push('MICK Mulligan Jr');
    xAxisData.push('Alexas Kurcevos Jr');

    for (var i = 15; i >= 5; i--) {
        SeriesData.push([i * 15000]);
        //SeriesData.push([i * 1000, i * 2000, i * 3000]);

        chatsubtitles = 'Total (Previous Month)'
    }

    
}

var ChartGrouping = [];
var ChartTitle = [];
var ChartType = [];
var RankingDuration = [];
var ChartDuration = [];
var nameArray= [];
var distanceArray = [];

function loadChartData() {

    var ajax_data = {
    };
    $.ajax({
        url: SVC_DataServicePath() + 'GetChartData',
        type: 'POST',
        contentType: 'application/json; charset=utf-8',
        dataType: 'json',
        success: function (data) {
            
            if (data.d != null && data.d.length > 0) {
                var dataType = '';
                $(data.d).each(function (index, item) {



                    if (item.Id == -1) {
                        dataType = item.GroupDesc;
                    }
                    if (item.Id >= 0 && dataType == 'ChartGrouping') {
                        ChartGrouping.push(item);
                    }
                    if (item.Id >= 0 && dataType == 'ChartTitle') {
                        ChartTitle.push(item);
                    }
                    if (item.Id >= 0 && dataType == 'ChartType') {
                        ChartType.push(item);
                    }
                    if (item.Id >= 0 && dataType == 'RankingDuration') {
                        RankingDuration.push(item);

                    }
                    if (item.Id >= 0 && dataType == 'ChartDuration') {
                        ChartDuration.push(item);
                    }


                });
            } else {
                $("#dialog-drivertag-update").dialog('close');
            }


        }
    });
}
//GetCharDistancetData(int AssetGroupId, int DurationId, int GroupingId, int RankingDurationId, int UnitID)


function GetGenericChart(chartitle, chartsettingDialogId, chartid, chartType, AssetGroupId, DurationId, GroupingId, RankingDurationId) {
    //  //console.log(parent.selectedAssetGroupID);
    var id = chartid.toString().match(numberPattern)[0];
    console.log('fetching data for chart ' + id + '  duration  ' + new Date().getMilliseconds());
    var e = document.getElementById('ddlMatricType' + id);
    var index = 1;
    try{
        index = e.selectedIndex;
        if (index === undefined || index==-1) {
            index = 1;
        }
        //console.log(e.options[index].value);
    }
    catch (ex) {
        return;
    }
    var spname = e.options[index].value.split('~')[1];
    //console.log(spname);
    var ajax_data = { "AssetGroupId": parent.selectedAssetGroupID, "DurationId": DurationId, "GroupingId": GroupingId, "RankingDurationId": RankingDurationId, "UnitID": 0, "SPName":spname };

    ////console.log(ajax_data);
    $.ajax({
        url: SVC_DataServicePath() + 'GetGenericChartData',
        type: 'POST',
        contentType: 'application/json; charset=utf-8',
        dataType: 'json',
        data: JSON.stringify(ajax_data),
        async: false,
        success: function (data) {
            //console.log(data.d);
            console.log(' completed fetching data for chart' + id + new Date().getMilliseconds());
            var datacount = data.d.length;
            SeriesData = [];
            xAxisData = [];
            nameArray = [];
            distanceArray = [];
            AssetIds = [];
            DriverIds = [];
            globalDriverName = [];
            globalDistanceData = []
            globalDriversId = []
            globalAssetId = [];
            globalDriversId = [];
            MPG = [];
            TargetMpg = [];
            Score = [];
            var tmparr = [];
            var chartKPI = $('#ddlMatricType' + id + ' option:selected').text();
            var name = 'Group1';
            if (data.d == null) {
                return;
            }

            if (data.d.length == -0 || data.d[0] ==null)
            {

                // parent.notifyError('No data available');
                $('#loader' + id).hide();
                $('#chartsDialog' + id).hide();
                $('#NoResultDialog' + id).show();
                return;
            }
            var pointWidth = 3;
            for (var i = data.d.length - 1; i >= 0 ; i--)
            {
                if (data.d[i].Score != null) {

                    globalDistanceData.push(data.d[i].Score);
                }
                if (data.d[i].CO2Value != null) {
                    globalDistanceData.push(data.d[i].CO2Value);
                    if (chartKPI == 'Co2 Fleet') {
                        
                        globalDriverName.push(getMonthString(data.d[i].MonthValue) + "-" + data.d[i].YearValue);
                    }
                }
                if (chartKPI == 'Plot Chart - Fleet MPG') {
                        console.log(data.d[i].YValue.substring(4));
                        globalDriverName.push(data.d[i].YValue.substring(4));
                        globalDistanceData.push(data.d[i].XValue);
                }
                
                if (data.d[i].MilesPerHB != null) {
                    globalDistanceData.push(data.d[i].MilesPerHB);
                }
                if (data.d[i].MilesPerHA != null) {
                    globalDistanceData.push(data.d[i].MilesPerHA);
                }
                if (data.d[i].Distance !=null) {
                    globalDistanceData.push(data.d[i].Distance );
                }
                if (data.d[i].DurationIdle != null) {
                    globalDistanceData.push(converttoHhMMSS( data.d[i].DurationIdle));
                }
                if (data.d[i].DurationExcessIdle != null) {
                    globalDistanceData.push(converttoHhMMSS(data.d[i].DurationExcessIdle));
                }
                if (data.d[i].AccelHarshLeft != null) {

                    globalDistanceData.push(data.d[i].AccelHarshLeft);
                }
                if (data.d[i].AccelHarshRight != null) {

                    globalDistanceData.push(data.d[i].AccelHarshRight);
                }
                if (chartKPI != 'Co2 Fleet') {
                    globalDriverName.push(data.d[i].Reg);
                }
                if (chartKPI == 'Plot Chart - Vehicle MPG' || chartKPI=='Plot Chart - Fleet MPG') {
                    populateMultipleSplineChart (data.d, chartid, chartitle, chartType, chartsettingDialogId);
                    return;
                }
                globalAssetId.push(data.d[i].AssetID);
                globalDriversId.push(data.d[i].DriverID);
                TargetMpg.push(data.d[i].MPG);
                MPG.push(data.d[i].TargetMpg);

            }

            
            chartSettings.xAxisData = globalDriverName;
            chartSettings.YAxisData = globalDistanceData;
            chartSettings.AssetIds = globalAssetId;
            chartSettings.DriverIds = globalAssetId;
            chartSettings.MPG = MPG;
            chartSettings.TargetMpg = TargetMpg;
            console.log(' completed populatig data for chart ' + id +'  duration  ' + new Date().getMilliseconds());
            populatechart(chartid, chartitle, chartType, chartsettingDialogId);
            isloading = false;
            isdatafetching = false;

        }
    });
}

function GetChartDistanceData(chartitle, chartsettingDialogId, chartid, chartType, AssetGroupId, DurationId, GroupingId, RankingDurationId) {
  //  //console.log(parent.selectedAssetGroupID);
    var ajax_data = { "AssetGroupId": parent.selectedAssetGroupID, "DurationId": DurationId, "GroupingId": GroupingId, "RankingDurationId": RankingDurationId, "UnitID": 0 };

    ////console.log(ajax_data);
    $.ajax({
        url: SVC_DataServicePath() + 'GetCharDistancetData',
        type: 'POST',
        contentType: 'application/json; charset=utf-8',
        dataType: 'json',
        data: JSON.stringify(ajax_data),
        async:false,
        success: function (data) {
            //console.log(data.d);
            var datacount = data.d.length;
            SeriesData = [];
            xAxisData = [];
            nameArray = [];
            distanceArray = [];
            AssetIds = [];
            DriverIds = [];
            globalDriverName =[];
            globalDistanceData=[]
            globalDriversId=[]
            globalAssetId = [];
            var tmparr = [];

            var name = 'Group1';
            if (data.d == null) {
                return;
            }
            var pointWidth = 3;
            for (var i = data.d.length - 1; i >=0 ; i--) {
                
                    globalDriverName.push(data.d[i].Reg);
                    globalDistanceData.push(data.d[i].Distance);
                    globalAssetId.push(data.d[i].AssetID);
                    globalDriversId.push(data.d[i].DriverID);


            }
            chartSettings.xAxisData = globalDriverName;
            chartSettings.YAxisData = globalDistanceData;
            chartSettings.AssetIds = globalAssetId;
            chartSettings.DriverIds = globalAssetId;
            //console.log(chartsetting);
            populatechart(chartid, chartitle, chartType, chartsettingDialogId);
            isloading = false;
            isdatafetching = false;

        }
    });
}

function populateMultipleSplineChart(dataarray,chartid, charttitle, chartType, chartsizeparam) {
    var id = chartid.match(numberPattern);
    var tmpchartprefix = getChartPrefix(id);
    var rankingrange = $('#RanlingType' + id + ' :selected').text().toString().split(" ");
    var startIndex = 0;
    var range = 0;
    range = 12;
    var tmpxaxisData=[];
    var charseries=[];
    var tmpAssetIds = [];
    var seriesObject={};

    var currentAssetId=0;
    var previousAssetId = -1;
    var currentArrayIndex = 0;
    var tmpDriverIds = [];
    var assetinccount = 0;
    for (var i = 0; i < dataarray.length; i++) {
        currentAssetId=   dataarray[i].AssetID;
        
        if (currentAssetId != previousAssetId) {

            previousAssetId = currentAssetId;
            seriesObject = {};
            seriesObject.showInLegend = false;
            seriesObject.name = dataarray[i].Reg;
            
            seriesObject.data =[];
            seriesObject.marker= {
                symbol: 'square'
            };
            charseries.push(seriesObject);
            currentArrayIndex = charseries.length - 1;
            tmpAssetIds.push(currentAssetId);
            assetinccount++;
           
            //{ showInLegend: false, name: charttitle, data: tmpdata };
        }
        if(parseInt( dataarray[i].XValue)!=0)
        charseries[currentArrayIndex].data.push(dataarray[i].XValue);
    }
    var currentmonth = new Date().getMonth() + 1;

    for (var indexmonth = 0; indexmonth < 12; indexmonth++) {
        if (currentmonth == 0) {
            currentmonth = 12;
        }
        switch (currentmonth.toString()) {
            case "4":
                tmpxaxisData.push('April');
                break;
            case "3":
                tmpxaxisData.push('March');
                break;
            case "2":
                tmpxaxisData.push('Feb');
                break;
            case "1":
                tmpxaxisData.push('Jan');
                break;
            case "12":
                tmpxaxisData.push('Dec');
                break;
            case "11":
                tmpxaxisData.push('Nov');
                break;
            case "10":
                tmpxaxisData.push('Oct');
                break;
            case "9":
                tmpxaxisData.push('Sept');
                break;
            case "8":
                tmpxaxisData.push('Aug');
                break;
            case "7":
                tmpxaxisData.push('Jun');
                break;
            case "6":
                tmpxaxisData.push('Jul');
                break;
            case "5":
                tmpxaxisData.push('May');
                break;
        }
        currentmonth--;
    }

    SeriesData= charseries;
    
    var KPiSelection = $('#ddlMatricType' + id + ' :selected').text().replace(/^\s\s*/, '').replace(/\s\s*$/, '');

    var arrayIndexpos = renderedchartobjects.contains(chartid);
    if (arrayIndexpos >= 0) {
        renderedchartobjects[arrayIndexpos].xAxisData = tmpxaxisData;
        renderedchartobjects[arrayIndexpos].SeriesData = SeriesData; //{ showInLegend: false, name: charttitle, data: tmpdata };
        renderedchartobjects[arrayIndexpos].AssetIds = tmpAssetIds;
        renderedchartobjects[arrayIndexpos].DriverId = tmpDriverIds;
        renderedchartobjects[arrayIndexpos].splineData = SeriesData;
        renderedchartobjects[arrayIndexpos].charttitle = KPiSelection;
        renderedchartobjects[arrayIndexpos].chartPrefix = tmpchartprefix;
    }

    console.log(SeriesData);
chartSettings.charttitle = KPiSelection;
setMultiSplineChart(chartid, KPiSelection, null, tmpxaxisData, '', chartsizeparam, tmpchartprefix, chartSettings.seriesname);
  
}

function populatechart(chartid, charttitle, chartType, chartsizeparam) {
    
    var id = chartid.match(numberPattern);
    var tmpAssetIds = [];
    var tmpDriverIds = [];
    var tmpchartprefix = getChartPrefix(id);
    console.log(' chart populatig data for chart ' + id + "   " + new Date().getMilliseconds());
    if (chartType == 'Trend') {
        var id = chartid.match(numberPattern);
        var rankingrange = $('#RanlingType' + id + ' :selected').text().toString().split(" ");
        var startIndex = 0;
        var range = 0;
        var tmpdata = [];
        var tmpxaxisData = [];
        chartSettings.xAxisData = globalDriverName;
        chartSettings.YAxisData = globalDistanceData;
        chartSettings.AssetIds = globalAssetId;
        chartSettings.DriverIds = globalAssetId;
        chartSettings.chartPrefix = tmpchartprefix;

        if (rankingrange[0] == 'Bottom') {
            var arrayIndexpos = renderedchartobjects.contains(chartid)
            if (arrayIndexpos >= 0) {
                renderedchartobjects[arrayIndexpos].xAxisData = globalDriverName;
                renderedchartobjects[arrayIndexpos].AssetIds = tmpAssetIds;
                renderedchartobjects[arrayIndexpos].DriverId = tmpDriverIds;
                renderedchartobjects[arrayIndexpos].YAxisData = globalDistanceData;
                renderedchartobjects[arrayIndexpos].chartPrefix = tmpchartprefix;
            }
            startIndex = chartSettings.YAxisData.length - 1;
            range = parseInt(rankingrange[1]);
            if (chartSettings.YAxisData.length > range) {
                range = chartSettings.YAxisData.length - range;
                for (var i = startIndex; i >= range; i--) {
                    tmpdata.push([chartSettings.xAxisData[i], chartSettings.YAxisData[i]]);
                    tmpxaxisData.push(chartSettings.xAxisData[i]);
                    tmpAssetIds.push( chartSettings.AssetIds[i]);
                    tmpDriverIds.push(chartSettings.DriverIds[i]);
           
                }
            }
            if (chartSettings.YAxisData.length < range) {
                startIndex = 0;
                range = chartSettings.YAxisData.length - 1;
                for (var i = range; i >= startIndex; i--) {
                    tmpdata.push(chartSettings.YAxisData[i]);
                    tmpxaxisData.push(chartSettings.xAxisData[i]);
                    tmpAssetIds.push( chartSettings.AssetIds[i]);
                    tmpDriverIds.push(chartSettings.DriverIds[i]);
                }
            }
            
        }
        else {

            range = parseInt(rankingrange[1])-1;
            if (chartSettings.YAxisData.length <= range) {
                range = chartSettings.YAxisData.length - 1;
            }
            for (var i = startIndex; i <= range; i++) {
                //tmpdata.push(chartSettings.YAxisData[i]);
                tmpdata.push([chartSettings.xAxisData[i], chartSettings.YAxisData[i]]);

                tmpxaxisData.push(chartSettings.xAxisData[i]);
                tmpAssetIds.push( chartSettings.AssetIds[i]);
                tmpDriverIds.push(chartSettings.DriverIds[i]);
            }
        }

        SeriesData = { cropThreshold: 100000, showInLegend: false, name: charttitle, data: tmpdata };
        xAxisData = tmpxaxisData;
        
        var enablescrolling = true;
        if (rankingrange[1] == '5') {
            enablescrolling = false;
        }
        var arrayIndexpos=   renderedchartobjects.contains(chartid)
        if (arrayIndexpos >= 0) {
            renderedchartobjects[arrayIndexpos].xAxisData = xAxisData;
            renderedchartobjects[arrayIndexpos].SeriesData = { showInLegend: false, name: charttitle, data: tmpdata };;
            renderedchartobjects[arrayIndexpos].AssetIds = tmpAssetIds;
            renderedchartobjects[arrayIndexpos].DriverId = tmpDriverIds;
            renderedchartobjects[arrayIndexpos].chartPrefix = tmpchartprefix;
        }
        if (tmpchartprefix == 'hh:mm:ss') {
            
            tmpdata.sort(function (a, b) {

                return b > a;


            });
            for (idate = 0; idate < tmpdata.length; idate++) {
                tmpdata[idate] = convertToUTCDate(tmpdata[idate]);
            }
            //console.log(tmpdata);
            SeriesData = { showInLegend: false, name: charttitle, data: tmpdata };
            setTrendChartTimeBased(chartid, charttitle, '', chartsizeparam, enablescrolling, renderedchartobjects[arrayIndexpos].chartPrefix);
        }
        else {

            setTrendChart(chartid, charttitle, '', chartsizeparam, enablescrolling, renderedchartobjects[arrayIndexpos].chartPrefix);
        }
        
    }
    if (chartType == 'Gauge') {

        var arrayIndexpos = renderedchartobjects.contains(chartid)
        if (arrayIndexpos >= 0) {
            renderedchartobjects[arrayIndexpos].xAxisData = globalDriverName;
            renderedchartobjects[arrayIndexpos].AssetIds = tmpAssetIds;
            renderedchartobjects[arrayIndexpos].DriverId = tmpDriverIds;
            renderedchartobjects[arrayIndexpos].MPG = MPG;
            renderedchartobjects[arrayIndexpos].TargetMpg = TargetMpg
            renderedchartobjects[arrayIndexpos].chartPrefix = tmpchartprefix;
        }
        chartSettings.MPG = renderedchartobjects[arrayIndexpos].MPG;

        var tmparr = [];
        for (var i = 0; i < chartSettings.MPG.length; i++) {
            tmparr.push(chartSettings.MPG[i]);
        }
        tmparr = tmparr.reverse();
        
        var id = chartid.substring(chartid.length - 1);
        var rankingrange = $('#RanlingType' + id + ' :selected').text().toString().split(" ");
        var startIndex = 0;
        var range = 0;
        var tmpdata = [];
        var tmpxaxisData = [];
        if (rankingrange[0] == 'Bottom') {
            startIndex = tmparr.length - 1;
            range = parseInt(rankingrange[1]);
            if (tmparr.length > range) {
                range = tmparr.length - range;
                for (var i = startIndex; i >= range; i--) {
                    tmpdata.push(tmparr[i]);
                  
                }
            }
            if (tmparr.length < range) {
                startIndex = 0;
                range = tmparr.length - 1;
                for (var i = range; i >= startIndex; i--) {
                    tmpdata.push(tmparr[i]);
                    
                }
            }

        }
        else {
            range = parseInt(rankingrange[1]) - 1;
            if (tmparr.length <= range) {
                range = tmparr.length - 1;
            }
            for (var i = startIndex; i <= range; i++) {
                tmpdata.push(tmparr[i]);
                
            }
        }
        
        var arrayIndexpos = renderedchartobjects.contains(chartid)
        if (arrayIndexpos >= 0) {
            renderedchartobjects[arrayIndexpos].xAxisData = tmpdata;
            renderedchartobjects[arrayIndexpos].SeriesData = { showInLegend: false, name: charttitle, data: tmpdata };
            renderedchartobjects[arrayIndexpos].chartPrefix = tmpchartprefix;
            if (rankingrange[0] == 'Bottom') {    
                renderedchartobjects[arrayIndexpos].minvalue = tmpdata[tmpdata.length - 1];
                renderedchartobjects[arrayIndexpos].maxvalue = tmpdata[0];
            }
            else 
            {
                renderedchartobjects[arrayIndexpos].maxvalue = tmpdata[tmpdata.length - 1];
                renderedchartobjects[arrayIndexpos].minvalue = tmpdata[0];
            }
        }
        if (rankingrange[0] == 'Bottom') {
            setGaugeChart(chartid, tmpdata[tmpdata.length - 1], tmpdata[0], charttitle, '');
        }
        else {
            setGaugeChart(chartid, tmpdata[0], tmpdata[tmpdata.length - 1], charttitle, '');
        }
        
    }
    if (chartType == 'Ranking') {
        var id = chartid.match(numberPattern);
        var rankingrange = $('#RanlingType' + id + ' :selected').text().toString().split(" ");
        var KPiSelection = $('#ddlMatricType' + id + ' :selected').text().replace(/^\s\s*/, '').replace(/\s\s*$/, '');
        var startIndex = 0;
        var range = 0;
        var tmpdata = [];
        var tmpxaxisData = [];
        if (rankingrange[0] == 'Bottom') {
            startIndex = chartSettings.YAxisData.length - 1;
            range = parseInt(rankingrange[1]);
            if (chartSettings.YAxisData.length > range) {
                range = chartSettings.YAxisData.length - range;
                for (var i = startIndex; i >= range; i--) {
                    tmpdata.push(chartSettings.YAxisData[i]);
                    tmpxaxisData.push(chartSettings.xAxisData[i]);
                    tmpAssetIds.push(chartSettings.AssetIds[i]);
                    tmpDriverIds.push(chartSettings.DriverIds[i]);
                }
            }
            if (chartSettings.YAxisData.length < range) {
                startIndex = 0;
                range = chartSettings.YAxisData.length - 1;
                for (var i = range; i >= startIndex; i--) {
                    tmpdata.push(chartSettings.YAxisData[i]);
                    tmpxaxisData.push(chartSettings.xAxisData[i]);
                    tmpAssetIds.push( chartSettings.AssetIds[i]);
                    tmpDriverIds.push(chartSettings.DriverIds[i]);
                }
            }

        }
        else {
            range = parseInt(rankingrange[1]) - 1;
            if (chartSettings.YAxisData.length <= range) {
                range = chartSettings.YAxisData.length - 1;
            }
            for (var i = startIndex; i <= range; i++) {
                tmpdata.push(chartSettings.YAxisData[i]);
                tmpxaxisData.push(chartSettings.xAxisData[i]);
                tmpAssetIds.push( chartSettings.AssetIds[i]);
                tmpDriverIds.push(chartSettings.DriverIds[i]);
            }
        }

        SeriesData = { cropThreshold: 100000, showInLegend: false, name: charttitle, data: tmpdata };
        xAxisData = tmpxaxisData;
        chartSettings.AssetIds = tmpAssetIds;
        chartSettings.DriverId = tmpDriverIds;
        var enablescrolling = true;
        if (rankingrange[1] == '5') {
            enablescrolling = false;
        }
        var arrayIndexpos = renderedchartobjects.contains(chartid)
        if (arrayIndexpos >= 0) {
            renderedchartobjects[arrayIndexpos].xAxisData = xAxisData;
            renderedchartobjects[arrayIndexpos].SeriesData = { showInLegend: false, name: charttitle, data: tmpdata };
            renderedchartobjects[arrayIndexpos].AssetIds = tmpAssetIds;
            renderedchartobjects[arrayIndexpos].DriverId = tmpDriverIds;
            renderedchartobjects[arrayIndexpos].chartPrefix = tmpchartprefix;
        }
        if (tmpchartprefix == 'hh:mm:ss') {
            tmpdata.sort(function (a, b) {

                return b > a;


            });
            for (idate = 0; idate < tmpdata.length; idate++) {
                tmpdata[idate] = convertToUTCDate(tmpdata[idate]);
            }
            setRankingChartTimeBased(chartid, charttitle, '', enablescrolling, renderedchartobjects[arrayIndexpos].chartPrefix);
        }
        else {
            
            setRankingChart(chartid, charttitle, '', enablescrolling, renderedchartobjects[arrayIndexpos].chartPrefix);
        }
        
    }
    if (chartType == 'Pie Chart') {
        var id = chartid.match(numberPattern);
        var rankingrange = $('#RanlingType' + id + ' :selected').text().toString().split(" ");
        var startIndex = 0;
        var range = 0;
        var tmpdata = [];
        var tmpxaxisData = [];
        if (rankingrange[0] == 'Bottom') {
            startIndex = chartSettings.YAxisData.length - 1;
            range = parseInt(rankingrange[1]);
            if (chartSettings.YAxisData.length > range) {
                range = chartSettings.YAxisData.length - range;
                for (var i = startIndex; i >= range; i--) {
                    tmpdata.push(chartSettings.YAxisData[i]);
                    tmpxaxisData.push(chartSettings.xAxisData[i]);
                }
            }
            if (chartSettings.YAxisData.length < range) {
                startIndex = 0;
                range = chartSettings.YAxisData.length - 1;
                for (var i = range; i >= startIndex; i--) {
                    tmpdata.push(chartSettings.YAxisData[i]);
                    tmpxaxisData.push(chartSettings.xAxisData[i]);
                }
            }

        }
        else {
            range = parseInt(rankingrange[1]) - 1;
            if (chartSettings.YAxisData.length <= range) {
                range = chartSettings.YAxisData.length - 1;
            }
            for (var i = startIndex; i <= range; i++) {
                tmpdata.push(chartSettings.YAxisData[i]);
                tmpxaxisData.push(chartSettings.xAxisData[i]);
            }
        }

        SeriesData = { showInLegend: false, name: charttitle, data: tmpdata };
        xAxisData = tmpxaxisData;
        var arrayIndexpos = renderedchartobjects.contains(chartid)
        if (arrayIndexpos >= 0) {
            renderedchartobjects[arrayIndexpos].xAxisData = xAxisData;
            renderedchartobjects[arrayIndexpos].SeriesData = { showInLegend: false, name: charttitle, data: tmpdata };
            renderedchartobjects[arrayIndexpos].chartPrefix = tmpchartprefix;

        }

        setPieChart(chartid, charttitle, '', chartsizeparam);
    }

    if (chartType == 'Fixed Column') {

        var tmpMpg = [];
        var tmpTargetMpg = [];
        var belowTargetMpg=[];
        var onTargetMpg=[];
        var aboveTargetMpg = [];
        
        var arrayIndexpos = renderedchartobjects.contains(chartid)
        if (arrayIndexpos >= 0) {
            
            renderedchartobjects[arrayIndexpos].xAxisData = globalDriverName;
            renderedchartobjects[arrayIndexpos].AssetIds = tmpAssetIds;
            renderedchartobjects[arrayIndexpos].DriverId = tmpDriverIds;
            renderedchartobjects[arrayIndexpos].MPG = MPG;
            renderedchartobjects[arrayIndexpos].TargetMpg= TargetMpg
            renderedchartobjects[arrayIndexpos].chartPrefix = tmpchartprefix;
        }
        
        var rankingrange = $('#RanlingType' + id + ' :selected').text().toString().split(" ");
        var startIndex = 0;
        var range = 0;
        var tmpdata = [];
        var tmpxaxisData = [];
        if (rankingrange[0] == 'Bottom') {
            startIndex = chartSettings.TargetMpg.length - 1;
            range = parseInt(rankingrange[1]);
            if (chartSettings.TargetMpg.length > range) {
                range = chartSettings.TargetMpg.length - range;
                for (var i = startIndex; i >= range; i--) {
                    tmpMpg.push(chartSettings.MPG[i]);
                    tmpxaxisData.push(globalDriverName[i]);

                    if (chartsetting.TargetMpg[i] > chartsetting.MPG[i]) {
                        aboveTargetMpg.push(chartsetting.TargetMpg[i]);
                        belowTargetMpg.push(0);
                        onTargetMpg.push(0)
                    }
                    else if (chartsetting.TargetMpg[i] == chartsetting.MPG[i]) {
                        aboveTargetMpg.push(0);
                        belowTargetMpg.push(0);
                        onTargetMpg.push(chartsetting.TargetMpg[i]);
                    }
                    else {
                        aboveTargetMpg.push(0);
                        belowTargetMpg.push(chartsetting.TargetMpg);
                        onTargetMpg.push(0);
                    }
                }
            }
            if (chartSettings.TargetMpg.length < range) {
                startIndex = 0;
                range = chartSettings.TargetMpg.length - 1;
                for (var i = range; i >= startIndex; i--) {
                    tmpMpg.push(chartSettings.MPG[i]) ;
                    tmpxaxisData.push(globalDriverName[i]);

                    if (chartsetting.TargetMpg[i] > chartsetting.MPG[i]) {
                        aboveTargetMpg.push(chartSettings.TargetMpg[i]);
                        belowTargetMpg.push(0);
                        onTargetMpg.push(0)
                    }
                    else if (chartsetting.TargetMpg[i] == chartsetting.MPG[i]) {
                        aboveTargetMpg.push(0);
                        belowTargetMpg.push(0);
                        onTargetMpg.push(chartSettings.TargetMpg[i]);
                    }
                    else {
                        aboveTargetMpg.push(0);
                        belowTargetMpg.push(chartsetting.TargetMpg[i]);
                        onTargetMpg.push(0);
                    }
                }
            }
        }
        else {
      
            range = parseInt(rankingrange[1]) - 1;
            if (chartSettings.TargetMpg.length <= range) {
                range = chartSettings.TargetMpg.length - 1;
            }
            for (var i = startIndex; i <= range; i++) {
                tmpdata.push(chartSettings.YAxisData[i]);
                tmpxaxisData.push(globalDriverName[i]);
                tmpAssetIds.push(chartSettings.AssetIds[i]);
                tmpDriverIds.push(chartSettings.DriverIds[i]);
                tmpMpg.push(MPG[i]);
                if (chartsetting.TargetMpg[i] > chartsetting.MPG[i]) {
                    aboveTargetMpg.push(chartsetting.TargetMpg[i]);
                    belowTargetMpg.push(0);
                    onTargetMpg.push(0)
                }
                else if (chartsetting.TargetMpg[i] == chartsetting.MPG[i]) {
                    aboveTargetMpg.push(0);
                    belowTargetMpg.push(0);
                    onTargetMpg.push(chartsetting.TargetMpg[i]);
                }
                else {
                    aboveTargetMpg.push(0);
                    belowTargetMpg.push(chartsetting.TargetMpg[i]);
                    onTargetMpg.push(0);
                }
            }
      
        }

        xAxisData = tmpxaxisData;



        SeriesData = [];
        SeriesData.push({
            name: 'MPG Target',
            color: 'rgba(173,216,230,0.5)',
            data: tmpMpg,
            pointPadding: 0.4,
            pointPlacement: 0.2,
            pointWidth: 60
            

        });
        //SeriesData.push({
        //      name: 'MPG',
        //      color: 'rgba(5, 141, 199,0.5)',
        //      data: [150, 73, 20, 40, 50],
        //      pointPadding: 0.3,
        //      pointPlacement: -0.2,
        ////    pointWidth: 80

        //});
        SeriesData.push({
            name: 'MPG Below Target',
            color: 'rgba(255,0,0,0.5)',
            data: belowTargetMpg,
            pointPadding: 0.3,
            pointPlacement: 0.2,
            pointWidth: 40
        });
        SeriesData.push({
          name: 'MPG Above Target',
          color: 'rgba(50,205,50,0.5)',
          data:aboveTargetMpg,
          pointPadding: 0.3,
          pointPlacement: 0.2,
          pointWidth: 40
      });
        SeriesData.push({
            name: 'MPG On Target',
            color: 'rgba(50,205,50,0.5)',
            data: onTargetMpg,
            pointPadding: 0.3,
            pointPlacement: 0.2,
            pointWidth: 40
        });
        //SeriesData.push({
        //    name: 'MPG Below Target',
        //    color: 'rgba(0,128,0,0.5)',
        //    data: [ 73,50,0,0,0],
        //    pointPadding: 0.2,
        //    //pointPlacement: -0.2,
        //    pointWidth: 60

        //});


        //SeriesData.push(
        //{
        //    name: 'MPG Above Target',
        //    color: 'rgba(255,0,0,0.5)',
        //    data: [0,0,30,50,0],
        //    pointPadding: 0.2,
        //    //pointPlacement: -0.2,
        //    pointWidth: 60
        //});
        //SeriesData.push(
        //{
        //    name: 'MPG On Target',
        //    color: 'rgba(255,255,0,0.5)',
        //    data: [0, 0, 0, 0,50],
        //    pointPadding: 0.2,
        //   // pointPlacement: -0.2,
        //    pointWidth: 60
        //});
        //var arrayIndexpos = renderedchartobjects.contains(chartid)
        //if (arrayIndexpos >= 0) {
        //    renderedchartobjects[arrayIndexpos].xAxisData = xAxisData;
        //    renderedchartobjects[arrayIndexpos].SeriesData = SeriesData;
          
        //}
        //console.log(SeriesData);
        if (arrayIndexpos >= 0) {

            renderedchartobjects[arrayIndexpos].SeriesData = SeriesData;
        }
        if (tmpMpg.length <= 5) {
            setFixedChartColumn(chartid, charttitle, '', false, tmpchartprefix);
        }
        else {
            setFixedChartColumn(chartid, charttitle, '', true, tmpchartprefix);
        }
    }
    if (chartType == 'Spline') {
        var id = chartid.match(numberPattern);
        var rankingrange = $('#RanlingType' + id + ' :selected').text().toString().split(" ");
        var startIndex = 0;
        var range = 0;
        var tmpdata = [];
        var tmpxaxisData = [];
            range = 12;
            if (chartSettings.YAxisData.length <12) {
                range = chartSettings.YAxisData.length - 1;
            }
            for (var i = startIndex; i <= range; i++) {
                tmpdata.push(chartSettings.YAxisData[i]);
                //tmpxaxisData.push(chartsetting.xAxisData[i]);
                //tmpAssetIds.push(chartSettings.AssetIds[i]);
                //tmpDriverIds.push(chartSettings.DriverIds[i]);
            }
        var currentmonth = new Date().getMonth()+1;
      
        for (var indexmonth = 0; indexmonth < 12; indexmonth++)
        {
            if (currentmonth == 0) {
                currentmonth = 12;
            }
            switch (currentmonth.toString()) {
                case "4":
                    tmpxaxisData.push('April');
                    break;
                case "3":
                    tmpxaxisData.push('March');
                    break;
                case "2":
                    tmpxaxisData.push('Feb');
                    break;
                case "1":
                    tmpxaxisData.push('Jan');
                    break;
                case "12":
                    tmpxaxisData.push('Dec');
                    break;
                case "11":
                    tmpxaxisData.push('Nov');
                    break;
                case "10":
                    tmpxaxisData.push('Oct');
                    break;
                case "9":
                    tmpxaxisData.push('Sept');
                    break;
                case "8":
                    tmpxaxisData.push('Aug');
                    break;
                case "7":
                    tmpxaxisData.push('Jun');
                    break;
                case "6":
                    tmpxaxisData.push('Jul');
                    break;
                case "5":
                    tmpxaxisData.push('May');
                    break;
            }
            currentmonth--;
        }
        var KPiSelection = $('#ddlMatricType' + id + ' :selected').text().replace(/^\s\s*/, '').replace(/\s\s*$/, '');

        var arrayIndexpos = renderedchartobjects.contains(chartid)
        if (arrayIndexpos >= 0) {
            renderedchartobjects[arrayIndexpos].xAxisData = tmpxaxisData;
            renderedchartobjects[arrayIndexpos].SeriesData = { showInLegend: false, name: charttitle, data: tmpdata };
            renderedchartobjects[arrayIndexpos].AssetIds = tmpAssetIds;
            renderedchartobjects[arrayIndexpos].DriverId = tmpDriverIds;
            renderedchartobjects[arrayIndexpos].splineData = tmpdata;
            renderedchartobjects[arrayIndexpos].charttitle = KPiSelection;
            renderedchartobjects[arrayIndexpos].chartPrefix = tmpchartprefix;
            if (KPiSelection == 'Plot Chart - Fleet MPG')
                renderedchartobjects[arrayIndexpos].seriesname = 'Fleet MPG';
            else 
                renderedchartobjects[arrayIndexpos].seriesname = 'Co2-Produced';
        }


        chartSettings.charttitle = KPiSelection;
        if (KPiSelection == 'Plot Chart - Fleet MPG')
            chartSettings.seriesname = 'Fleet MPG';
        else
            chartSettings.seriesname = 'Co2-Produced';
        setSplineChart(chartid, KPiSelection, tmpdata, tmpxaxisData, '', chartsizeparam, tmpchartprefix, chartSettings.seriesname);
    }
     console.log('completed chart populatig data for chart' + id + new Date().getMilliseconds());
}

var xAxisData = [];
var YAxisData = [];
var SeriesData = [];
var AssetIds = [];
var DriverIds = [];
var chatsubtitles = '';
function setPieChart(divid, charttitle, chartsize) {

    

    
    var xmin = SeriesData.data[SeriesData.data.length - 1];
    var xmax = SeriesData.data[0];
    if (xmax > xmin) {
        interval = Math.floor(xmax - xmin) / 2;
    }
    else {
        var temp = xmin;
        xmin = xmax;
        xmax = temp;
    }
    var maxval = 5;
    if (xAxisData.length <= 5) {
        maxval = xAxisData.length - 1;
    }
    var xmin = SeriesData.data[SeriesData.data.length - 1];
    var xmax = SeriesData.data[0];
    var interval = 0;
    if (xmax > xmin) {
        interval = Math.floor(xmax - xmin) / 2;
    }
    else {
        interval = Math.floor(xmin - xmax) / 2;
    }
    var    chart = new Highcharts.Chart({
        chart: {
            renderTo: divid,
            type: 'pie'

        },
        colors: ['#50B432', '#ED561B', '#DDDF00', '#24CBE5', '#64E572', '#FF9655', '#FFF263', '#6AF9C4'],

        title: {
            text: charttitle
        },
        credits: { enabled: false },
        yAxis: {
            title: {
                text: charttitle
            }
        },
        plotOptions: {
            pie: {
                shadow: false
            }
        },
        tooltip: {
            formatter: function () {
                return '<b>' + this.point.name + '</b>: ' + this.y +  kpiprefix ;
            }
        },
        series: [{
            name: 'Browsers',
            data: [["Lower Bound", xmin], ["Mid", parseInt(Math.floor((xmin+xmax)/2))], ["Upper Bound", xmax]],
            size: '60%',
            innerSize: '60%',

            dataLabels: {
                enabled: false
            }
        }]
    });
    charts.push(chart);
    var id = divid.match(numberPattern)[0];
    setTimeout(function (loaderid) {
        //console.log('hiding loader' + loaderid);
        $('#loader' + loaderid).hide();
    }, 10, id);
}

function setGaugeChart(chartid, min, max, charttitle, chartsize) {
    var avgvaluue = (max + min) / 2;
    var chart = new Highcharts.Chart({
    
        chart: {
            type: 'gauge',
            renderTo: chartid,
            plotBackgroundImage: null,
            height: 310,
            width : 500,
            events: {
                load: function () {
         //           this.setSize(chartsize, chartsize, false);
                }
            },
           
        },
        credits: { enabled: false },
        title: {
            text: charttitle
        },

        pane: [{
            startAngle: -90,
            endAngle: 90,
            background: null,
            innerRadius: '100%',
            outerRadius: '60%',
            
            //center: ['50%', '100%'],
            size: '100%',
        }],
        
        yAxis: [{
            min:0,
            max: max,
            minorTickLength: 0,
            tickLength: 0,
            tickWidth: 0,
            tickInterval:max,
            endOnTick: true,
            labels: {
                enabled: false,
                y: 10
            },
            title: {
                text: '',
                useHTML: true,
                y: 200
            },
            
            plotBands: [{
                from: 0,
                to: min,
                color: '#55BF3B', // green
                thickness: '40%'
            }, {
                from: min,
                to: avgvaluue,
                color: '#DDDF0D', // yellow
                thickness: '40%'
            }, {
                from: avgvaluue,
                to: max,
                color: '#DF5353', // red
                thickness: '40%'
            }],

        }],

        plotOptions: {
            gauge: {
                dataLabels: {
                    enabled: true
                },
                dial: {
                    radius: '100%'
                }
            }
        },
        series: [{
            data: [max],
            yAxis: 0
        }]


        // Let the music play




    });
    var id = chartid.match(numberPattern);
    chart.setSize($("#firstTrendChart" + id).width() - 5, $("#firstTrendChart" + id).height());
    setTimeout(function (loaderid) {
        
        $('#loader' + loaderid).hide();
    }, 10, id);
    setTimeout(setLabels(chartid), 10000)

}
function setLabels(div, nax) {
    var textlablee = $('#' + div + ' .highcharts-axis-labels text');
    //textlablee[0].innerHTML = '0';
    //textlablee[1].innerHTML =  nax ;
   
}
function setTrendChart(divid) {




    var chart = new Highcharts.Chart({
        chart: {
            renderTo: divid,
            type: 'bar',
            margin: [0, 0, 0, 0]
        },
        credits: { enabled: false },
        legend: { enabled: false },

        plotOptions: {
            series: {
                cursor: 'pointer',
                point: {
                    events: {
                        click: function () {
                     //       alert('Category: ' + this.category + ', value: ' + this.y);
                        }
                    }
                }
            }

        },
        xAxis: {
            categories: xAxisData,

            dateTimeLabelFormats: { // don't display the dummy year
                month: '%e. %b',
                year: '%b'
            },
            lineColor: '#FFF',
            lineWidth: 1,
            tickColor: '#666',
            tickLength: 3,
            tickInterval: 1,
            title: {
                text: chatsubtitles,
                style: {
                    color: '#333'
                }
            }
        },
        yAxis: {
            dateTimeLabelFormats: { // don't display the dummy year
                month: '%e. %b',
                year: '%b'
            },

            lineColor: '#999',
            lineWidth: 1,
            tickColor: '#666',
            tickWidth: 1,
            tickLength: 3,
            gridLineColor: '#ddd',

        },
        credits: { enabled: false },
        series: SeriesData


    });
    //setTimeout(chart.container.tooltip.enabled = false, 10000);

};
function setGroupingChart(divid) {
    $('#' + divid).highcharts({
        chart: {
            type: 'bar'
        },

        xAxis: {
            categories: xAxisData,
            crosshair: true,
            min: 0,
            max: 6
        },
        yAxis: {
            min: 0,
            title: {
                text: 'Total (Previous Month)'
            },

        },

        plotOptions: {
            bar: {
                series: {
                    pointPadding: 0,
                    groupPadding: 0,
                    borderWidth: 0,
                    shadow: false

                },

                dataLabels: {
                    enabled: true,
                    crop: false,

                    overflow: 'justify',
                    useHTML: true,
                    format: '&euro; {point.y}'
                }
            }
        },
        series: [{
            data: SeriesData,
            dataLabels: {
                style: {
                    color: 'black',

                    fontSize: "10px"
                }
            }
        }],
        credits: {
            enabled: false
        }
    });
    chart.container.tooltip.enabled = false;
}

var chartSettings = []

var redrawCallbacks = [];
function appendOnRedrawEvent(callback) {
    redrawCallbacks.push(callback);
}
var loadCallbacks = [];
function appendOnLoadEvent(callback) {
    loadCallbacks.push(callback);
}

function renderSingleChartData() {
    
    var settingcount = $('[id^= settingDialog]').length;

    for (var i = 0; i < settingcount; i++) {

        var chartheader = $('#chartHeading' + i).html();
        chartheader = chartheader.replace('[ChartTitle]', $('#ddlMatricType' + i + ' :selected').text());
    //    //console.log(chartheader);

        $('#chartHeading' + i).append(chartheader);
        var chartsetting = {};

        chartsetting.chartId = $('#firstTrendChart' + i).attr('id');
        chartsetting.AssetGroupId = 4;
        chartsetting.DurationId = 1;
        chartsetting.chartType = $('#ddlRanking' + i + ' :selected').text();
        chartsetting.GroupingId = $('#ddlTime' + i).val;
        chartsetting.RankingDurationId = $('#ddlRanking' + i).val();
        chartsetting.UnitID = 0;

        chartSettings.push(chartsetting)
    }
    for (var chartcount = 0; i < chartSettings.length; chartcount++) {
        var tmpchart = chartSettings[i];
        GetGenericChart(tmpchart.chartid, tmpchart.chartType, tmpchart.AssetGroupId, tmpchart.durationId, tmpchart.GroupingId, tmpchart.RankingDurationId);
        setTrendChart(chartSettings[i].chartId);
    }
}

function renderChartData() {
    var settingcount = $('[id^= settingDialog]').length;

    for (var i = 0; i < settingcount; i++) {

        var chartheader = $('#chartHeading' + i).html();
        chartheader = chartheader.replace('[ChartTitle]', '<h6>' + $('#ddlMatricType' + i + ' :selected').text() + '</h6>');
        
        $('#chartHeading' + i).show();
        var chartTitle = $('#chartHeading' + i).html(chartheader);
        var chartsetting = {};

        chartsetting.chartId = $('#firstTrendChart' + i).attr('id');
        chartsetting.AssetGroupId = 4;
        chartsetting.title = $('#ddlMatricType' + i + ' :selected').text();
        chartsetting.DurationId = 1;
        chartsetting.chartType = $('#ddlRanking' + i + ' :selected').text();
        chartsetting.GroupingId = $('#ddlTime' + i).val();
        chartsetting.RankingDurationId = $('#ddlRanking' + i).val();
        chartsetting.UnitID = 0;

        
        chartSettings.push(chartsetting)
    }
    for (var chartcount = 0; chartcount < chartSettings.length; chartcount++) {
        var tmpchart = chartSettings[chartcount];
        GetGenericChart(chartsetting.title, tmpchart.chartid, tmpchart.chartType, tmpchart.AssetGroupId, tmpchart.DurationId, tmpchart.GroupingId, tmpchart.RankingDurationId);
        //setTrendChart(chartSettings[chartcount].chartId);
    }
    
}
var parenttoremove;
function showDelete(lnkobj) {
    parenttoremove = lnkobj;
    var id = $(lnkobj).attr('id').toString().match(numberPattern)[0];
    var deletemsg = 'Are you sure you want to delete Dashboard ' + $(lnkobj).attr('data-name');
    $('#deletemessage').html('')
    $('#deletemessage').html(deletemsg);
    $('#confirm-delete').data('id', id).modal('show');

    // $("#confirm-delete").show("modal")
}

function redrawCharts() {
    for (var i = 0; i < charts.length; i++) {

        var chart = charts[i];
        if (!isNaN(chart.isResizing)) {
            var id = chart.renderTo.id.toString().substring(chart.renderTo.id.toString().length - 1);
            chart.setSize($('#firstTrendChart'+id).width() - 5, $('#firstTrendChart').height()-10);
            //chart.redraw();
        }
    }
}
$(document).ready(function () {
 
    //console.log('document ready');
    
    $(window).resize(function () {
        var object = $(this)
        
        for (var i = 0; i < charts.length; i++) {
            
            var chart = charts[i];
            if (!isNaN(chart.isResizing)) {
                
                var id = chart.renderTo.id.toString().substring(chart.renderTo.id.toString().length - 1);
               chart.setSize($("#firstTrendChart" + id).width()-5, $("#firstTrendChart" + id).height());
                chart.redraw();
            }
        }
        appendOnRedrawEvent(function () { redrawCharts();});
        appendOnLoadEvent(function () { redrawCharts(); });
    });
    $('#fullscreenclose').on('click', function(e){
        

    });
    $('#basicModal').on('show.bs.modal', function (e) {

        $("#basicModal .close").on("click", function (e) {

            $('#main').show();
        });
    });
    $('#confirm-delete').on('show.bs.modal', function (e) {

        $("#confirm-delete a.btn").on("click", function (e) {
            $(this).find('.btn-ok').attr('href', $(e.relatedTarget).data('href'));
                //console.log("button pressed");// just as an example...
                var id =$(parenttoremove).attr('id').toString().match(numberPattern)[0];
                    //$(lnkobj).attr('id').toString().substring($(lnkobj).attr('id').toString().length - 1)
            if ($('#ChartDbId' + id).val() != -1) {
                DeleteCharts($('#ChartDbId' + id).val());
            }
            removeParent(parenttoremove);
            $("#confirm-delete").modal('hide');     // dismiss the dialog
        });
    });
       
    $("#confirm-delete").on("hide", function () {    // remove the event listeners when the dialog is dismissed
        $("#confirm-delete a.btn").off("click");
    });

    $("#confirm-delete").on("hidden", function () {  // remove the actual elements from the DOM when fully hidden
        $("#confirm-delete").remove();
    });
    $('#ddlRanking').on('change', function () {
        if ($('#ddlRanking option:selected').text() == 'Ranking' || $('#ddlRanking option:selected').text() == 'Trend') {
            $('#RanlingType').show();
        }
        else {
            $('#RanlingType').hide();

        }
    });
 

});
Highcharts.setOptions({
    colors: ['#058DC7'],
    xAxis: {
        labels: {
            style: {
                lineHeight: '12px'
            }
        }
    }
});

function setFixedChartColumn(divid, charttitle, chartsize, scrollingenabled, paramChartPrefix) {
    var maxval = Math.max.apply(Math, SeriesData[0].data);
    var chart = Highcharts.chart(divid, {
        chart: {
            type: 'column'
        },
        title: {
            text: charttitle
        },
        credits: { enabled: false },
        xAxis: {
            categories: xAxisData,
            min: 0,
            max : 4,
            scrollbar: {
                enabled: scrollingenabled
            }

        },
   
        yAxis: [{
            min: 0,
            max : maxval,
            title: {
                text: null
            }
        }],
        legend: {
            shadow: false
        },
        tooltip: {
            shared: true
        },
        plotOptions: {

            column: {
                grouping: false,
                shadow: false,
                borderWidth: 0
            },
            series: {
                            events: {
                       
                            click: function (e) {
                                var tmpassetid = 0;
                                var chartobj=null;
                                var indexpos = renderedchartobjects.contains(divid);

                                if (indexpos >= 0) {
                                    chartobj = renderedchartobjects[indexpos];
                                    for (var i = 0; i < chartobj.xAxisData.length; i++) {
                                        if (e.point.category == chartobj.xAxisData[i]) {
                                            tmpassetid=   chartobj.AssetIds[i]
                                        }
                                    }
                                }
                                LoadReport('ACAN',divid, tmpassetid,chartobj);
                            }
                }

            //                             parent.scrollposition = $(window).scrollTop();
            }
         },
         series:SeriesData
    });
    charts.push(chart);
    var id = divid.match(numberPattern);
    setTimeout(function (loaderid) {

        $('#loader' + loaderid).hide();
    }, 10, id);
}
function setFixedChartColumntemp(divid, charttitle, chartsize, scrollingenabled) {

    var xAxisData = ['BGZ 9469', 'EGZ 6116', 'EGZ 2254', '11 D 55575', 'EGZ 1272'];



    var SeriesData = [];

    SeriesData.push({
        name: 'MPG',
        color: 'rgba(165,170,217,1)',
        data: [150, 73, 20,40,50],
        pointPadding: 0.3,
        pointPlacement: -0.2
    
    });
    
    SeriesData.push(
    {
        name: 'MPGTarget',
        color: 'rgba(126,86,134,.9)',
        data: [140, 90, 40,50,40],
        pointPadding: 0.4,
        pointPlacement: -0.2
        
    });



    //console.log(SeriesData);


    var xmin = 0;
    var xmax = 4;
    var interval = 0;
    

    //if (SeriesData.data.length - 1 < maxval) {
    //    maxval = SeriesData.data.length - 1;
    //}
    //if (xmax > xmin) {
    //    interval = Math.floor(xmax - xmin) / 2;
    //}
    //else {
    //    interval = Math.floor(xmin - xmax) / 2;
    //}

    

    var chart = new Highcharts.Chart({
        chart: {
            renderTo: divid,
            type: 'column',
            height: 330,
            width: 550,


            events: {
                load: function () {
                },
                redraw: function (event) {

                }
            }
        },
        title: {
            text: charttitle
        },
        xAxis: {
            categories: xAxisData
            
        },
        yAxis: [{
            min: 0,
            max:maxval
        } ],
        legend: {
            shadow: false
        },
        tooltip: {
            shared: true
        },
        plotOptions: {
            column: {
                grouping: false,
                shadow: false,
                borderWidth: 0
            }
        },
        plotOptions: {
            series: {
               
                cursor: 'pointer',
                point: {
                    events: {

                        click: function (e) {
                            var tmpassetid = 0;
                            var chartobj = null;
                            var indexpos = renderedchartobjects.contains(divid);

                            if (indexpos >= 0) {
                                chartobj = renderedchartobjects[indexpos];
                                for (var i = 0; i < chartobj.xAxisData.length; i++) {
                                    if (this.category == chartobj.xAxisData[i]) {
                                        tmpassetid = chartobj.AssetIds[i]
                                    }
                                }
                            }
                            //LoadReport(null,divid, tmpassetid, chartobj);
                           // parent.scrollposition = $(window).scrollTop();
                        }
                    }
                },
                column: {
                        grouping: false,
                        shadow: false,
                        borderWidth: 0
                }
            }
        },

        series: SeriesData
    });
    charts.push(chart);
    var id = divid.match(numberPattern);
    setTimeout(function (loaderid) {
        
        $('#loader' + loaderid).hide();
    }, 10, id);
    if (divid.indexOf("container_chart1000") < 0) {
        chart.setSize($("#firstTrendChart" + id).width(), $("#firstTrendChart" + id).height() - 10);
    }

}

function setMultiSplineChart(divid, charttitle, chartdata, tmpxaxisData, chartsize, scrollingenabled, paramchartprefix,paramseriesname) {
    var id = divid.match(numberPattern);
    
    Highcharts.chart(divid, {
        chart: {
            type: 'spline'
        },
        title: {
            text: charttitle
        },
        credits: { enabled: false },
        xAxis: {
            categories: tmpxaxisData,
            min : 0,
            max :11
        },
        plotOptions: {
            spline: {
                marker: {
                    radius: 4,
                    lineColor: '#666666',
                    lineWidth: 1
                }
            }
        },
        yAxis: {
            title: {
                text: paramchartprefix
            }
        },
        tooltip: {
            headerFormat: '',
            pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
                '<td style="padding:0"><b>{point.y:.1f} ' + paramchartprefix + '</b></td></tr>',
            footerFormat: '</table>',
            useHTML: true
        },
        series: SeriesData
    });
    
    setTimeout(function (loaderid) {

        $('#loader' + loaderid).hide();
    }, 10, id);
}

function setSplineChart(divid, charttitle, chartdata, tmpxaxisData, chartsize, scrollingenabled, paramchartprefix,paramseriesname) {
    var id = divid.match(numberPattern);
    
    Highcharts.chart(divid, {
        chart: {
            type: 'spline'
        },
        title: {
            text: charttitle
        },
        credits: { enabled: false },
        xAxis: {
            categories: tmpxaxisData,
            min : 0,
            max :11
        },
        tooltip: {
            crosshairs: true,
            shared: true
        },
        plotOptions: {
            spline: {
                marker: {
                    radius: 4,
                    lineColor: '#666666',
                    lineWidth: 1
                }
            }
        },
        yAxis: {
            title: {
                text: paramchartprefix
            }
        },
        tooltip: {
            headerFormat: '',
            pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
                '<td style="padding:0"><b>{point.y:.1f} ' + paramchartprefix + '</b></td></tr>',
            footerFormat: '</table>',
            shared: true,
            useHTML: true
        },
        series: [{
            name: paramseriesname,
            marker: {
                symbol: 'square'
            },
            data: chartdata
        }]
    });
    
    setTimeout(function (loaderid) {

        $('#loader' + loaderid).hide();
    }, 10, id);
}

function setRankingChart(divid, charttitle, chartsize, scrollingenabled, paramchartprefix) {
    
    var xmin = parseInt( SeriesData.data[SeriesData.data.length - 1]);
    var xmax = parseInt(SeriesData.data[0]);
    var interval = 0;
    var maxval = 7;
    var margbottom = 50;
    if (SeriesData.data.length - 1 < maxval) {
        maxval = SeriesData.data.length - 1;
    }
    if (xmax > xmin) {
        interval = Math.floor(xmax - xmin) / 2;
    }
    else {
        interval = Math.floor(xmin - xmax) / 2;
    }
    if (xmin > xmax) {
        var temp = xmin;
        xmin = xmax;
        xmax = temp;
    }
    else if (xmin == xmax) {
        xmax = xmax + 1;
    }

    if (SeriesData.data.length > 5) {
        margbottom = 150;
    }

    var chart = new Highcharts.Chart({
        chart: {
            renderTo: divid,
            type: 'column',
            height: 330,
            width: 550,
            marginBottom: margbottom,
            
            events: {
                load: function () {
                },
                redraw: function (event) {
                    
                }
            }
        },
        title: {
            text: charttitle
        },
        credits: { enabled: false },

        tooltip: {
            headerFormat: '',
            pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
                '<td style="padding:0"><b>{point.y:.1f} ' + paramchartprefix + '</b></td></tr>',
            footerFormat: '</table>',
            shared: true,
            useHTML: true
        },
        yAxis: {
            labels: {
                format: '{value}' + paramchartprefix
            },
            title: { text: '' },
            scalable: false,
            min: Math.floor(xmin),
            max: Math.floor(xmax)

            

        },
        xAxis: {
            categories: xAxisData,
            min: 0,
            max :maxval,
            type: 'category',
            title: {
                text: null
            },
            scrollbar: {
                enabled: scrollingenabled
            },
            tickLength: 0,
            uniqueNames: false,

            

        },

        legend: {
            verticalAlign: 'top',

            align: 'left'
        },

        plotOptions: {
            series: {
                pointPadding: 0.1,
                groupPadding: 0,               
                
                cursor: 'pointer',
                point: {
                    events: {
                       
                        click: function (e) {
                            var tmpassetid = 0;
                            var chartobj=null;
                            var indexpos = renderedchartobjects.contains(divid);

                            if (indexpos >= 0) {
                                chartobj = renderedchartobjects[indexpos];
                                for (var i = 0; i < chartobj.xAxisData.length; i++) {
                                    if (this.category == chartobj.xAxisData[i]) {
                                         tmpassetid=   chartobj.AssetIds[i]
                                    }
                                }
                            }
                             LoadReport(null,divid, tmpassetid,chartobj);
//                             parent.scrollposition = $(window).scrollTop();
                        }
                    }
                }
            }
        },

        series: [SeriesData]
    });
    charts.push(chart);
    var id = divid.match(numberPattern);
    setTimeout(function (loaderid) {
        //console.log('hiding loader' + loaderid);
        $('#loader' + loaderid).hide();
    }, 10, id);
    if (divid.indexOf("container_chart1000") < 0)
    {
        chart.setSize($("#firstTrendChart" + id).width(), $("#firstTrendChart" + id).height() - 10);
    }
    
}

function setRankingChartTimeBased(divid, charttitle, chartsize, scrollingenabled, paramchartprefix) {

    var xmin = SeriesData.data[SeriesData.data.length - 1];
    var xmax = SeriesData.data[0];
    var interval = 0;
    var maxval = 7;

    if (SeriesData.data.length - 1 < maxval) {
        maxval = SeriesData.data.length - 1;
    }
    if (xmax > xmin) {
        interval = Math.floor(xmax - xmin) / 2;
    }
    else {
        interval = Math.floor(xmin - xmax) / 2;
    }



    var chart = new Highcharts.Chart({
        chart: {
            renderTo: divid,
            type: 'column',
            height: 330,
            width: 550,
            marginBottom:100,

            events: {
                load: function () {
                },
                redraw: function (event) {

                }
            }
        },
        colors: ['#ff0000'],
        title: {
            text: charttitle
        },
        credits: { enabled: false },

        
        xAxis: {
            categories: xAxisData,
            id: 'x_asxis' + settingDialogCounter,
            min: 0,
            max :4,
            scrollbar: {
                enabled: scrollingenabled
            },
            events: {
                setExtremes: function (e) {
                    e.from = SeriesData[0];
                    e.to = SeriesData[SeriesData.length - 1];
                    if (e.trigger === 'navigator') {

                    }

                }
            }

        },

        legend: {
            verticalAlign: 'top',

            align: 'left'
        },
        yAxis: {
            type: 'datetime',
            min: SeriesData.data[SeriesData.data.length-1],
            max: SeriesData.data[0],
            title: {
                text: 'Time'
            }
        },
        tooltip: {
            pointFormat: '{point.y:%H:%M:%S}',
            shared: true,
        },
        
        series: [SeriesData],
        plotOptions: {
            series: {
                pointPadding: 0.1,
                groupPadding: 0,

                cursor: 'pointer',
                point: {
                    events: {

                        click: function (e) {
                            var tmpassetid = 0;
                            var chartobj = null;
                            var indexpos = renderedchartobjects.contains(divid);

                            if (indexpos >= 0) {
                                chartobj = renderedchartobjects[indexpos];
                                for (var i = 0; i < chartobj.xAxisData.length; i++) {
                                    if (this.category == chartobj.xAxisData[i]) {
                                        tmpassetid = chartobj.AssetIds[i]
                                    }
                                }
                            }
                            LoadReport(null,divid, tmpassetid, chartobj);
                            //                             parent.scrollposition = $(window).scrollTop();
                        }
                    }
                }
            }
        }

        
    });
    charts.push(chart);
    var id = divid.match(numberPattern);
    setTimeout(function (loaderid) {
        //console.log('hiding loader' + loaderid);
        $('#loader' + loaderid).hide();
    }, 10, id);
    if (divid.indexOf("container_chart1000") < 0) {
        chart.setSize($("#firstTrendChart" + id).width(), $("#firstTrendChart" + id).height() - 10);
    }

}

function setTrendChart(divid, charttitle, chartsize, chartSizeValue, scrollingenabled, paramchartPrefiix) {
    var xmin = SeriesData.data[0][1];
    var xmax = SeriesData.data[SeriesData.data.length - 1][1];
    var maxval =7;
        if (SeriesData.data.length - 1 < maxval) {
            maxval = SeriesData.data.length - 1;
        }
    var interval = 0;

    if (xmin > xmax) {
        var temp = xmin;
        xmin = xmax;
        xmax = temp;
    }
    else if (xmin == xmax) {
        xmax = xmax + 1;
    }
    var chart = new Highcharts.Chart({
        chart: {
            renderTo: divid,
            type: 'bar',
            marginLeft: 100,
            height: 350,
            width: 500,
        
            
            
            events: {
                load: function () {
                    
                    
                }
            }

        },
        title: {
            text: charttitle
        },

        credits: { enabled: false },
        tooltip: {
            headerFormat: '',
            pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
                '<td style="padding:0"><b>{point.y:.1f} ' + paramchartPrefiix + '</b></td></tr>',
            footerFormat: '</table>',
            shared: true,
            useHTML: true
        },

        plotOptions: {
            series: {
                cursor: 'pointer',
                pointPadding: 0.1,
                groupPadding: 0,
                point: {
                    events: {
                        click: function () {
                            var tmpassetid = 0;
                            var chartobj = null;
                            var indexpos = renderedchartobjects.contains(divid);
                            //console.log('clicking trend chart');
                            if (indexpos >= 0) {
                                 chartobj = renderedchartobjects[indexpos];
                                for (var i = 0; i < chartobj.xAxisData.length; i++) {
                                    if (this.category == chartobj.xAxisData[i]) {
                                        tmpassetid = chartobj.AssetIds[i];
                                        
                                    }
                                }
                            }
                            //console.log(chartobj);
                           // parent.scrollposition = $(window).scrollTop();
                            LoadReport(null,divid, tmpassetid,chartobj);
                        }
                    }
                }
            }
        },


        xAxis: {
            
            type: 'category',
            title: {
                text: null
            },
            min: 0,
            max: maxval,
            scrollbar: {
                enabled: scrollingenabled
            },
            tickLength: 0,
            uniqueNames: false,
            events: {
               setExtremes: function (e) {
                   e.from = SeriesData[0];
                   e.to = SeriesData[SeriesData.length - 1];
                   if (e.trigger === 'navigator') {
                        
                    }
                    
                }
            }

        },

        legend: {
            verticalAlign: 'top',

            align: 'left'
        },

        yAxis: {
            min: Math.floor(xmin),
            max: Math.floor(xmax),
            labels: {
                format: '{value}' + paramchartPrefiix
            },
            title: { text: '' }

        },
        series: [SeriesData]
    });
    charts.push(chart);
    var id = divid.match(numberPattern)[0];
    _self = this;
    _self.id = id;
    setTimeout(function (loaderid) {
                        //console.log('hiding loader' + loaderid);
                        $('#loader' + loaderid).hide();
    }, 10, id);
    var dialogwidth = $("#chartsDialog" + id).width();
    var dialogheight = $("#chartsDialog" + id).height();
    var width = $("#firstTrendChart" + id).width();
    var height = $("#firstTrendChart" + id).height() - 10;
    if (chartSizeValue == '') {
        return;
    }
    if (chartSizeValue ==2)
    {
        $("#parent" + id).removeClass('col-md-6 col-lg-6');
        $("#parent" + id).removeClass('col-md-2 col-lg-2');
        $("#parent" + id).addClass('col-md-3 col-lg-3');
        width = $("#firstTrendChart" + id).width();
        height = $("#firstTrendChart" + id).height() - 10;
        //console.log('x*y' + width + height);
        chart.setSize(width, height);
        

    }
    if (chartSizeValue == 1) {
        $("#parent" + id).removeClass('col-md-6 col-lg-6');
        $("#parent" + id).removeClass('col-md-3 col-lg-3');
        $("#parent" + id).addClass('col-md-2 col-lg-2');
        width = $("#firstTrendChart" + id).width();
        height = $("#firstTrendChart" + id).height() - 10;
        chart.setSize(width, height);

    }
    if (chartSizeValue == 3) {
        $("#parent" + id).removeClass('col-md-2 col-lg-2');
        $("#parent" + id).removeClass('col-md-3 col-lg-3');
        $("#parent" + id).addClass('col-md-6 col-lg-6');
        width = $("#firstTrendChart" + id).width();
        height = $("#firstTrendChart" + id).height() - 10;
        chart.setSize(width, height);

    }
    //console.log('chart rendering complete');
}
function setTrendChartTimeBased(divid, charttitle, chartsize, chartSizeValue, scrollingenabled, paramchartPrefiix) {
    var maxval = 7;
    
    if (SeriesData.data.length - 1 < maxval) {
        maxval = SeriesData.data.length - 1;
    }
    var interval = 0;
    var interval = 0;
    interval = 3600 * 1000;
   
    var chart = new Highcharts.Chart({
        chart: {
            renderTo: divid,
            type: 'bar',
            height: 350,
            width: 500,
            marginLeft: 100,
            

            events: {
                load: function () {


                }
            }

        },
        colors: ['#ff0000'],

        title: {
            text: charttitle
        },

        credits: { enabled: false },
        
        plotOptions: {
            series: {
                cursor: 'pointer',
                pointPadding: 0.1,
                groupPadding: 0,
                point: {
                    events: {
                        click: function () {
                            var tmpassetid = 0;
                            var chartobj = null;
                            var indexpos = renderedchartobjects.contains(divid);
                            //console.log('clicking trend chart');
                            if (indexpos >= 0) {
                                chartobj = renderedchartobjects[indexpos];
                                for (var i = 0; i < chartobj.xAxisData.length; i++) {
                                    if (this.category == chartobj.xAxisData[i]) {
                                        tmpassetid = chartobj.AssetIds[i];

                                    }
                                }
                            }
                            //console.log(chartobj);
                            
                            LoadReport(null,divid, tmpassetid, chartobj);
                        }
                    }
                }
            }
        },


        xAxis: {
            categories: xAxisData,
            id: 'x_asxis' + settingDialogCounter,
            scrollbar: {
                enabled: scrollingenabled
            },
            type: 'category',
            title: {
                text: null
            },
            min: 0,
            max: maxval,
            
            tickLength: 0,
            uniqueNames: false,
            style:{
                lineHeight: '14px',
                fontSize: '1em'

            },
            events: {
                setExtremes: function (e) {
                    e.from = SeriesData[0];
                    e.to = SeriesData[SeriesData.length - 1];
                    if (e.trigger === 'navigator') {

                    }

                }
            }

        },

        legend: {
            verticalAlign: 'top',

            align: 'left'
        },
        yAxis: {
            type: 'datetime',
            min: SeriesData.data[SeriesData.data.length-1],
            max: SeriesData.data[0],
            title: {
                text: 'Time'
            }
        },
        tooltip: {
            pointFormat: '{point.y:%H:%M:%S}',
            shared: true,
        },
        
        series: [SeriesData]
    });
    charts.push(chart);
    var id = divid.match(numberPattern)[0];
    _self = this;
    _self.id = id;
    setTimeout(function (loaderid) {
        //console.log('hiding loader' + loaderid);
        $('#loader' + loaderid).hide();
    }, 10, id);
    //width, height
    //chart.setSize(width, height);

    //console.log('original size' + $("#firstTrendChart" + id).width());
    //console.log('50% of  original size' + $("#firstTrendChart" + id).width()/2);
    //console.log('50% of  original size' + $("#firstTrendChart" + id).width() /4);
    var dialogwidth = $("#chartsDialog" + id).width();
    var dialogheight = $("#chartsDialog" + id).height();
    var width = $("#firstTrendChart" + id).width();
    var height = $("#firstTrendChart" + id).height() - 10;
    if (chartSizeValue == '') {
        return;
    }
    if (chartSizeValue == 2) {
        $("#parent" + id).removeClass('col-md-6 col-lg-6');
        $("#parent" + id).removeClass('col-md-2 col-lg-2');
        $("#parent" + id).addClass('col-md-3 col-lg-3');
        width = $("#firstTrendChart" + id).width();
        height = $("#firstTrendChart" + id).height() - 10;
        //console.log('x*y' + width + height);
        chart.setSize(width, height);


    }
    if (chartSizeValue == 1) {
        $("#parent" + id).removeClass('col-md-6 col-lg-6');
        $("#parent" + id).removeClass('col-md-3 col-lg-3');
        $("#parent" + id).addClass('col-md-2 col-lg-2');
        width = $("#firstTrendChart" + id).width();
        height = $("#firstTrendChart" + id).height() - 10;
        chart.setSize(width, height);

    }
    if (chartSizeValue == 3) {
        $("#parent" + id).removeClass('col-md-2 col-lg-2');
        $("#parent" + id).removeClass('col-md-3 col-lg-3');
        $("#parent" + id).addClass('col-md-6 col-lg-6');
        width = $("#firstTrendChart" + id).width();
        height = $("#firstTrendChart" + id).height() - 10;
        chart.setSize(width, height);

    }
    //console.log('chart rendering complete');
}


function setTrendChartFull(divid, charttitle, chartsize, chartSizeValue, scrollingenabled) {
    var xmin = SeriesData.data[SeriesData.data.length - 1];
    var xmax = SeriesData.data[0];
    var maxval = 7;
    var chartwidth = $('#basicModal').width() - 5;
    var chartheight = $('#basicModal').height() -50;
    if (SeriesData.data.length - 1 < maxval) {
        maxval = SeriesData.data.length - 1;
    }
    var interval = 0;
    var interval = 0;
    if (xmax > xmin) {
        interval = Math.floor(xmax - xmin) / 2;
    }
    else {
        var temp = xmin;
        xmin = xmax;
        xmax = temp;
    }

    var chart = new Highcharts.Chart({
        chart: {
            renderTo: divid,
            type: 'bar',
            height: chartheight,
            width:chartwidth,


            events: {
                load: function () {


                }
            }

        },
        title: {
            text: charttitle
        },

        credits: { enabled: false },
        tooltip: {
            headerFormat: '',
            pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
                '<td style="padding:0"><b>{point.y:.1f}'+kpiprefix+'</b></td></tr>',
            footerFormat: '</table>',
            shared: true,
            useHTML: true
        },

        plotOptions: {
            series: {
                cursor: 'pointer',
                pointPadding: 0.1,
                groupPadding: 0,
                point: {
                    events: {
                        click: function () {

                        }
                    }
                }
            }
        },


        xAxis: {
            categories: xAxisData,
            id: 'x_asxis' + settingDialogCounter,
            min: 0,

            max: maxval,

            scrollbar: {
                enabled: scrollingenabled
            },
            events: {
                setExtremes: function (e) {
                    e.from = SeriesData[0];
                    e.to = SeriesData[SeriesData.length - 1];
                    if (e.trigger === 'navigator') {

                    }

                }
            }

        },

        legend: {
            verticalAlign: 'top',

            align: 'left'
        },

        yAxis: {
            min: Math.floor(xmin),
            max: Math.floor(xmax),
            labels: {
                format: '{value}' + kpiprefix
            },
            title: { text: '' }

        },
        series: [SeriesData]
    });
    
    var id = divid.match(numberPattern)[0];
    _self = this;
    _self.id = id;
    setTimeout(function (loaderid) {
        //console.log('hiding loader' + loaderid);
        $('#loader' + loaderid).hide();
    }, 10, id);
    //width, height
    //chart.setSize(width, height);

    

    return chart;
}

function hideloader(id) {
    
}
