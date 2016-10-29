angular.module('starter.services', [])

        .service('BusServices', function BusServices($http) {
            var buses = [];
            this.getBuses = function () {
                //Failed because of access origin policy, hardcoding response
//                $http.get("http://developer.itsmarta.com/brdrestservice/restbusrealtimeservice/getallbus")
//                        .then(function (resp) {
//                            buses = resp;
//                        }, function (err) {
//                            //TODO:Handle error response
//                        });
                buses = [
                    {
                        ADHERENCE: "-12",
                        BLOCKID: "531",
                        BLOCK_ABBR: "8-2",
                        DIRECTION: "Northbound",
                        LATITUDE: "33.8601761",
                        LONGITUDE: "-84.3391371",
                        MSGTIME: "10/29/2016 1:58:22 PM",
                        ROUTE: "8",
                        STOPID: "211463",
                        TIMEPOINT: "Briarcliff & Druid Hills",
                        TRIPID: "5326016",
                        VEHICLE: "1558"
                    },
                    {
                        ADHERENCE: "0",
                        BLOCKID: "414",
                        BLOCK_ABBR: "49-2",
                        DIRECTION: "Northbound",
                        LATITUDE: "33.7537298",
                        LONGITUDE: "-84.3923768",
                        MSGTIME: "10/29/2016 2:03:17 PM",
                        ROUTE: "49",
                        STOPID: "102274",
                        TIMEPOINT: "Alabama & Forsyth",
                        TRIPID: "5316347",
                        VEHICLE: "2368"
                    },
                    {
                        ADHERENCE: "-14",
                        BLOCKID: "342",
                        BLOCK_ABBR: "24-1",
                        DIRECTION: "Westbound",
                        LATITUDE: "33.7615598",
                        LONGITUDE: "-84.3392922",
                        MSGTIME: "10/29/2016 2:06:00 PM",
                        ROUTE: "24",
                        STOPID: "105208",
                        TIMEPOINT: "Hosea Williams & Howard",
                        TRIPID: "5309014",
                        VEHICLE: "1527"
                    },
                    {
                        ADHERENCE: "0",
                        BLOCKID: "423",
                        BLOCK_ABBR: "5-2",
                        DIRECTION: "Northbound",
                        LATITUDE: "33.9213972",
                        LONGITUDE: "-84.3445976",
                        MSGTIME: "10/29/2016 2:06:46 PM",
                        ROUTE: "5",
                        STOPID: "903009",
                        TIMEPOINT: "Dunwoody Station",
                        TRIPID: "5312257",
                        VEHICLE: "1582"
                    },
                    {
                        ADHERENCE: "0",
                        BLOCKID: "164",
                        BLOCK_ABBR: "141-2",
                        DIRECTION: "Southbound",
                        LATITUDE: "33.944627",
                        LONGITUDE: "-84.3574563",
                        MSGTIME: "10/29/2016 2:07:31 PM",
                        ROUTE: "141",
                        STOPID: "903120",
                        TIMEPOINT: "Mansell Park/Ride",
                        TRIPID: "5322925",
                        VEHICLE: "1653"
                    },
                    {
                        ADHERENCE: "0",
                        BLOCKID: "538",
                        BLOCK_ABBR: "82-1",
                        DIRECTION: "Westbound",
                        LATITUDE: "33.59858",
                        LONGITUDE: "-84.5487326",
                        MSGTIME: "10/29/2016 2:07:41 PM",
                        ROUTE: "82",
                        STOPID: "182029",
                        TIMEPOINT: "Stonewall Tell & Roosevelt Hwy",
                        TRIPID: "5346080",
                        VEHICLE: "2324"
                    },
                    {
                        ADHERENCE: "0",
                        BLOCKID: "440",
                        BLOCK_ABBR: "55-1",
                        DIRECTION: "Northbound",
                        LATITUDE: "33.7529822",
                        LONGITUDE: "-84.3923121",
                        MSGTIME: "10/29/2016 2:07:43 PM",
                        ROUTE: "55",
                        STOPID: "102270",
                        TIMEPOINT: "Alabama & Broad St.",
                        TRIPID: "5345090",
                        VEHICLE: "2359"
                    },
                    {
                        ADHERENCE: "-6",
                        BLOCKID: "296",
                        BLOCK_ABBR: "196-1",
                        DIRECTION: "Southbound",
                        LATITUDE: "33.5678587",
                        LONGITUDE: "-84.4035329",
                        MSGTIME: "10/29/2016 2:08:52 PM",
                        ROUTE: "196",
                        STOPID: "212104",
                        TIMEPOINT: "Gardenwalk Blvd. & Riverdale Rd.",
                        TRIPID: "5316870",
                        VEHICLE: "1677"
                    },
                    {
                        ADHERENCE: "0",
                        BLOCKID: "201",
                        BLOCK_ABBR: "155-3",
                        DIRECTION: "Northbound",
                        LATITUDE: "33.750344",
                        LONGITUDE: "-84.3864333",
                        MSGTIME: "10/29/2016 2:08:59 PM",
                        ROUTE: "155",
                        STOPID: "210709",
                        TIMEPOINT: "Georgia State Station",
                        TRIPID: "5337607",
                        VEHICLE: "2204"
                    },
                    {
                        ADHERENCE: "0",
                        BLOCKID: "488",
                        BLOCK_ABBR: "71-4",
                        DIRECTION: "Eastbound",
                        LATITUDE: "33.7971668",
                        LONGITUDE: "-84.4875199",
                        MSGTIME: "10/29/2016 2:09:34 PM",
                        ROUTE: "71",
                        STOPID: "114900",
                        TIMEPOINT: "West End Station",
                        TRIPID: "5316402",
                        VEHICLE: "2516"
                    },
                    {
                        ADHERENCE: "0",
                        BLOCKID: "298",
                        BLOCK_ABBR: "196-3",
                        DIRECTION: "Southbound",
                        LATITUDE: "33.5737855",
                        LONGITUDE: "-84.3499162",
                        MSGTIME: "10/29/2016 2:10:07 PM",
                        ROUTE: "196",
                        STOPID: "212168",
                        TIMEPOINT: "Southlake Mall",
                        TRIPID: "5337923",
                        VEHICLE: "1536"
                    },
                    {
                        ADHERENCE: "-3",
                        BLOCKID: "50",
                        BLOCK_ABBR: "115-2",
                        DIRECTION: "Northbound",
                        LATITUDE: "33.722823",
                        LONGITUDE: "-84.1661547",
                        MSGTIME: "10/29/2016 2:10:48 PM",
                        ROUTE: "115",
                        STOPID: "134020",
                        TIMEPOINT: "Main St.& Swift St.",
                        TRIPID: "5344717",
                        VEHICLE: "1434"
                    },
                    {
                        ADHERENCE: "12",
                        BLOCKID: "31",
                        BLOCK_ABBR: "110-7",
                        DIRECTION: "Southbound",
                        LATITUDE: "33.8456448",
                        LONGITUDE: "-84.3575553",
                        MSGTIME: "10/29/2016 2:10:53 PM",
                        ROUTE: "110",
                        STOPID: "905666",
                        TIMEPOINT: "Lenox Station",
                        TRIPID: "5322609",
                        VEHICLE: "1452"
                    },
                    {
                        ADHERENCE: "-1",
                        BLOCKID: "300",
                        BLOCK_ABBR: "196-5",
                        DIRECTION: "Northbound",
                        LATITUDE: "33.5784699",
                        LONGITUDE: "-84.4118599",
                        MSGTIME: "10/29/2016 2:10:55 PM",
                        ROUTE: "196",
                        STOPID: "212141",
                        TIMEPOINT: "Lamar Hutcheson Pky @ Valley Hil",
                        TRIPID: "5328714",
                        VEHICLE: "1639"
                    },
                    {
                        ADHERENCE: "0",
                        BLOCKID: "348",
                        BLOCK_ABBR: "26-2",
                        DIRECTION: "Eastbound",
                        LATITUDE: "33.7716256",
                        LONGITUDE: "-84.3867166",
                        MSGTIME: "10/29/2016 2:11:38 PM",
                        ROUTE: "26",
                        STOPID: "907473",
                        TIMEPOINT: "North Ave Station",
                        TRIPID: "5309026",
                        VEHICLE: "2548"
                    },
                    {
                        ADHERENCE: "-10",
                        BLOCKID: "345",
                        BLOCK_ABBR: "25-1",
                        DIRECTION: "Southbound",
                        LATITUDE: "33.8575352",
                        LONGITUDE: "-84.3443503",
                        MSGTIME: "10/29/2016 2:11:48 PM",
                        ROUTE: "25",
                        STOPID: "905509",
                        TIMEPOINT: "Peachtree Ind. & Johnson Ferry R",
                        TRIPID: "5312295",
                        VEHICLE: "1624"
                    },
                    {
                        ADHERENCE: "0",
                        BLOCKID: "367",
                        BLOCK_ABBR: "32-3",
                        DIRECTION: "Northbound",
                        LATITUDE: "33.7529235",
                        LONGITUDE: "-84.3917008",
                        MSGTIME: "10/29/2016 2:11:53 PM",
                        ROUTE: "32",
                        STOPID: "102248",
                        TIMEPOINT: "Alabama & Peachtree",
                        TRIPID: "5340863",
                        VEHICLE: "2356"
                    },
                    {
                        ADHERENCE: "1",
                        BLOCKID: "604",
                        BLOCK_ABBR: "9-2",
                        DIRECTION: "Northbound",
                        LATITUDE: "33.7172493",
                        LONGITUDE: "-84.32957",
                        MSGTIME: "10/29/2016 2:12:07 PM",
                        ROUTE: "9",
                        STOPID: "129236",
                        TIMEPOINT: "Candler & Whites Mill",
                        TRIPID: "5331900",
                        VEHICLE: "1632"
                    },
                    {
                        ADHERENCE: "-2",
                        BLOCKID: "426",
                        BLOCK_ABBR: "5-5",
                        DIRECTION: "Southbound",
                        LATITUDE: "33.8797922",
                        LONGITUDE: "-84.3797718",
                        MSGTIME: "10/29/2016 2:12:13 PM",
                        ROUTE: "5",
                        STOPID: "902751",
                        TIMEPOINT: "Roswell & Hammond",
                        TRIPID: "5326001",
                        VEHICLE: "1451"
                    },
                    {
                        ADHERENCE: "-6",
                        BLOCKID: "444",
                        BLOCK_ABBR: "55-3",
                        DIRECTION: "Southbound",
                        LATITUDE: "33.7052304",
                        LONGITUDE: "-84.3787582",
                        MSGTIME: "10/29/2016 2:12:15 PM",
                        ROUTE: "55",
                        STOPID: "115168",
                        TIMEPOINT: "Atlanta Ave. & Hank Aaron",
                        TRIPID: "5326626",
                        VEHICLE: "2395"
                    },
                    {
                        ADHERENCE: "0",
                        BLOCKID: "8",
                        BLOCK_ABBR: "102-1",
                        DIRECTION: "Westbound",
                        LATITUDE: "33.7715034",
                        LONGITUDE: "-84.3873675",
                        MSGTIME: "10/29/2016 2:12:16 PM",
                        ROUTE: "102",
                        STOPID: "907473",
                        TIMEPOINT: "North Ave Station",
                        TRIPID: "5337260",
                        VEHICLE: "1544"
                    },
                    {
                        ADHERENCE: "-2",
                        BLOCKID: "453",
                        BLOCK_ABBR: "58-1",
                        DIRECTION: "Eastbound",
                        LATITUDE: "33.7725571",
                        LONGITUDE: "-84.4291769",
                        MSGTIME: "10/29/2016 2:12:21 PM",
                        ROUTE: "58",
                        STOPID: "904519",
                        TIMEPOINT: "Bankhead Station",
                        TRIPID: "5321981",
                        VEHICLE: "1571"
                    },
                    {
                        ADHERENCE: "-6",
                        BLOCKID: "99",
                        BLOCK_ABBR: "12-4",
                        DIRECTION: "Northbound",
                        LATITUDE: "33.7855068",
                        LONGITUDE: "-84.4116999",
                        MSGTIME: "10/29/2016 2:12:37 PM",
                        ROUTE: "12",
                        STOPID: "904800",
                        TIMEPOINT: "Midtown Station",
                        TRIPID: "5316964",
                        VEHICLE: "1570"
                    },
                    {
                        ADHERENCE: "0",
                        BLOCKID: "289",
                        BLOCK_ABBR: "193-4",
                        DIRECTION: "Northbound",
                        LATITUDE: "33.6770318",
                        LONGITUDE: "-84.4406086",
                        MSGTIME: "10/29/2016 2:13:04 PM",
                        ROUTE: "193",
                        STOPID: "146900",
                        TIMEPOINT: "East Point Station",
                        TRIPID: "5318187",
                        VEHICLE: "1605"
                    },
                    {
                        ADHERENCE: "2",
                        BLOCKID: "569",
                        BLOCK_ABBR: "85-4",
                        DIRECTION: "Southbound",
                        LATITUDE: "33.9447477",
                        LONGITUDE: "-84.3573726",
                        MSGTIME: "10/29/2016 2:13:16 PM",
                        ROUTE: "85",
                        STOPID: "902725",
                        TIMEPOINT: "North Springs Station",
                        TRIPID: "5332852",
                        VEHICLE: "1672"
                    },
                    {
                        ADHERENCE: "-5",
                        BLOCKID: "203",
                        BLOCK_ABBR: "16-2",
                        DIRECTION: "Northbound",
                        LATITUDE: "33.8021474",
                        LONGITUDE: "-84.3416844",
                        MSGTIME: "10/29/2016 2:13:55 PM",
                        ROUTE: "16",
                        STOPID: "904273",
                        TIMEPOINT: "Highland & Ponce de Leon",
                        TRIPID: "5336284",
                        VEHICLE: "1523"
                    },
                    {
                        ADHERENCE: "0",
                        BLOCKID: "253",
                        BLOCK_ABBR: "186-1",
                        DIRECTION: "Westbound",
                        LATITUDE: "33.7533711",
                        LONGITUDE: "-84.3893608",
                        MSGTIME: "10/29/2016 2:14:19 PM",
                        ROUTE: "186",
                        STOPID: "211627",
                        TIMEPOINT: "Pryor St. & Wall St.",
                        TRIPID: "5316836",
                        VEHICLE: "1429"
                    },
                    {
                        ADHERENCE: "-1",
                        BLOCKID: "77",
                        BLOCK_ABBR: "117-4",
                        DIRECTION: "Northbound",
                        LATITUDE: "33.7760602",
                        LONGITUDE: "-84.2814584",
                        MSGTIME: "10/29/2016 2:14:24 PM",
                        ROUTE: "117",
                        STOPID: "904264",
                        TIMEPOINT: "Avondale Station North Bay",
                        TRIPID: "5338230",
                        VEHICLE: "1620"
                    },
                    {
                        ADHERENCE: "-8",
                        BLOCKID: "2",
                        BLOCK_ABBR: "1-2",
                        DIRECTION: "Southbound",
                        LATITUDE: "33.7652994",
                        LONGITUDE: "-84.3918701",
                        MSGTIME: "10/29/2016 2:14:47 PM",
                        ROUTE: "1",
                        STOPID: "902605",
                        TIMEPOINT: "Huff Rd & Howell Mill",
                        TRIPID: "5335980",
                        VEHICLE: "1459"
                    },
                    {
                        ADHERENCE: "0",
                        BLOCKID: "18",
                        BLOCK_ABBR: "107-5",
                        DIRECTION: "Westbound",
                        LATITUDE: "33.7559984",
                        LONGITUDE: "-84.3527028",
                        MSGTIME: "10/29/2016 2:14:55 PM",
                        ROUTE: "107",
                        STOPID: "901066",
                        TIMEPOINT: "Inman Park Station (South Bay)",
                        TRIPID: "5344710",
                        VEHICLE: "1625"
                    },
                    {
                        ADHERENCE: "0",
                        BLOCKID: "443",
                        BLOCK_ABBR: "55-2",
                        DIRECTION: "Northbound",
                        LATITUDE: "33.7189192",
                        LONGITUDE: "-84.384974",
                        MSGTIME: "10/29/2016 2:15:05 PM",
                        ROUTE: "55",
                        STOPID: "150154",
                        TIMEPOINT: "Cleveland Ave & Jonesboro Rd",
                        TRIPID: "5321973",
                        VEHICLE: "2383"
                    },
                    {
                        ADHERENCE: "0",
                        BLOCKID: "494",
                        BLOCK_ABBR: "73-1",
                        DIRECTION: "Northbound",
                        LATITUDE: "33.7541561",
                        LONGITUDE: "-84.4687986",
                        MSGTIME: "10/29/2016 2:15:10 PM",
                        ROUTE: "73",
                        STOPID: "903320",
                        TIMEPOINT: "Hamilton E. Holmes Station",
                        TRIPID: "5316418",
                        VEHICLE: "2508"
                    },
                    {
                        ADHERENCE: "-5",
                        BLOCKID: "503",
                        BLOCK_ABBR: "74-1",
                        DIRECTION: "Eastbound",
                        LATITUDE: "33.7497191",
                        LONGITUDE: "-84.380898",
                        MSGTIME: "10/29/2016 2:15:12 PM",
                        ROUTE: "74",
                        STOPID: "211627",
                        TIMEPOINT: "Pryor St. & Wall St.",
                        TRIPID: "5308939",
                        VEHICLE: "1439"
                    },
                    {
                        ADHERENCE: "0",
                        BLOCKID: "27",
                        BLOCK_ABBR: "110-3",
                        DIRECTION: "Northbound",
                        LATITUDE: "33.8118339",
                        LONGITUDE: "-84.3921477",
                        MSGTIME: "10/29/2016 2:15:15 PM",
                        ROUTE: "110",
                        STOPID: "901789",
                        TIMEPOINT: "Arts Center Station",
                        TRIPID: "5309264",
                        VEHICLE: "1565"
                    },
                    {
                        ADHERENCE: "6",
                        BLOCKID: "297",
                        BLOCK_ABBR: "196-2",
                        DIRECTION: "Southbound",
                        LATITUDE: "33.6017625",
                        LONGITUDE: "-84.4299918",
                        MSGTIME: "10/29/2016 2:15:17 PM",
                        ROUTE: "196",
                        STOPID: "166900",
                        TIMEPOINT: "College Park Station South",
                        TRIPID: "5328718",
                        VEHICLE: "1635"
                    },
                    {
                        ADHERENCE: "-4",
                        BLOCKID: "375",
                        BLOCK_ABBR: "34-1",
                        DIRECTION: "Southbound",
                        LATITUDE: "33.7065359",
                        LONGITUDE: "-84.3082933",
                        MSGTIME: "10/29/2016 2:15:24 PM",
                        ROUTE: "34",
                        STOPID: "900110",
                        TIMEPOINT: "Gresham Rd SE & Flat Shoals",
                        TRIPID: "5326329",
                        VEHICLE: "1431"
                    },
                    {
                        ADHERENCE: "-1",
                        BLOCKID: "256",
                        BLOCK_ABBR: "186-4",
                        DIRECTION: "Eastbound",
                        LATITUDE: "33.7288881",
                        LONGITUDE: "-84.3236116",
                        MSGTIME: "10/29/2016 2:15:27 PM",
                        ROUTE: "186",
                        STOPID: "102226",
                        TIMEPOINT: "Broad & Marietta St.",
                        TRIPID: "5316839",
                        VEHICLE: "1424"
                    },
                    {
                        ADHERENCE: "-3",
                        BLOCKID: "97",
                        BLOCK_ABBR: "12-2",
                        DIRECTION: "Southbound",
                        LATITUDE: "33.8071476",
                        LONGITUDE: "-84.4127895",
                        MSGTIME: "10/29/2016 2:15:29 PM",
                        ROUTE: "12",
                        STOPID: "900080",
                        TIMEPOINT: "Howell Mill Rd & Paces Pavilion",
                        TRIPID: "5335630",
                        VEHICLE: "1587"
                    },
                    {
                        ADHERENCE: "-1",
                        BLOCKID: "182",
                        BLOCK_ABBR: "15-1",
                        DIRECTION: "Southbound",
                        LATITUDE: "33.7446522",
                        LONGITUDE: "-84.2909382",
                        MSGTIME: "10/29/2016 2:15:37 PM",
                        ROUTE: "15",
                        STOPID: "904262",
                        TIMEPOINT: "Decatur Station",
                        TRIPID: "5332167",
                        VEHICLE: "1437"
                    },
                    {
                        ADHERENCE: "-1",
                        BLOCKID: "556",
                        BLOCK_ABBR: "84-3",
                        DIRECTION: "Eastbound",
                        LATITUDE: "33.6561695",
                        LONGITUDE: "-84.512569",
                        MSGTIME: "10/29/2016 2:15:47 PM",
                        ROUTE: "84",
                        STOPID: "144118",
                        TIMEPOINT: "N CAMP CREEK PKY @ DARRAH DR",
                        TRIPID: "5322302",
                        VEHICLE: "2306"
                    },
                    {
                        ADHERENCE: "-8",
                        BLOCKID: "398",
                        BLOCK_ABBR: "39-5",
                        DIRECTION: "Northbound",
                        LATITUDE: "33.8563478",
                        LONGITUDE: "-84.3137389",
                        MSGTIME: "10/29/2016 2:15:48 PM",
                        ROUTE: "39",
                        STOPID: "902150",
                        TIMEPOINT: "Buford & Druid Hill",
                        TRIPID: "5338738",
                        VEHICLE: "1711"
                    },
                    {
                        ADHERENCE: "1",
                        BLOCKID: "292",
                        BLOCK_ABBR: "194-2",
                        DIRECTION: "Northbound",
                        LATITUDE: "33.6795228",
                        LONGITUDE: "-84.4339942",
                        MSGTIME: "10/29/2016 2:15:50 PM",
                        ROUTE: "194",
                        STOPID: "212726",
                        TIMEPOINT: "Crown Rd @ Browns Mill",
                        TRIPID: "5316860",
                        VEHICLE: "2377"
                    },
                    {
                        ADHERENCE: "-1",
                        BLOCKID: "42",
                        BLOCK_ABBR: "114-1",
                        DIRECTION: "Southbound",
                        LATITUDE: "33.7552369",
                        LONGITUDE: "-84.2683773",
                        MSGTIME: "10/29/2016 2:15:50 PM",
                        ROUTE: "114",
                        STOPID: "904264",
                        TIMEPOINT: "Avondale Station North Bay",
                        TRIPID: "5309282",
                        VEHICLE: "1676"
                    },
                    {
                        ADHERENCE: "-4",
                        BLOCKID: "434",
                        BLOCK_ABBR: "51-2",
                        DIRECTION: "Eastbound",
                        LATITUDE: "33.7647147",
                        LONGITUDE: "-84.4510709",
                        MSGTIME: "10/29/2016 2:15:53 PM",
                        ROUTE: "51",
                        STOPID: "903320",
                        TIMEPOINT: "Hamilton E. Holmes Station",
                        TRIPID: "5342601",
                        VEHICLE: "1649"
                    },
                    {
                        ADHERENCE: "-3",
                        BLOCKID: "160",
                        BLOCK_ABBR: "140-2",
                        DIRECTION: "Southbound",
                        LATITUDE: "34.0424804",
                        LONGITUDE: "-84.3030286",
                        MSGTIME: "10/29/2016 2:16:01 PM",
                        ROUTE: "140",
                        STOPID: "901235",
                        TIMEPOINT: "North Point Pky & Old Milton Pky",
                        TRIPID: "5337590",
                        VEHICLE: "1454"
                    },
                    {
                        ADHERENCE: "-14",
                        BLOCKID: "202",
                        BLOCK_ABBR: "16-1",
                        DIRECTION: "Southbound",
                        LATITUDE: "33.7640386",
                        LONGITUDE: "-84.3766255",
                        MSGTIME: "10/29/2016 2:16:06 PM",
                        ROUTE: "16",
                        STOPID: "905024",
                        TIMEPOINT: "Highland & Ponce de Leon",
                        TRIPID: "5315944",
                        VEHICLE: "1419"
                    },
                    {
                        ADHERENCE: "-11",
                        BLOCKID: "59",
                        BLOCK_ABBR: "116-2",
                        DIRECTION: "Westbound",
                        LATITUDE: "33.7529303",
                        LONGITUDE: "-84.1574772",
                        MSGTIME: "10/29/2016 2:16:37 PM",
                        ROUTE: "116",
                        STOPID: "134106",
                        TIMEPOINT: "Marbut Rd. & Stone Mt./Lit. Rd.",
                        TRIPID: "5337304",
                        VEHICLE: "1402"
                    },
                    {
                        ADHERENCE: "-3",
                        BLOCKID: "105",
                        BLOCK_ABBR: "120-1",
                        DIRECTION: "Eastbound",
                        LATITUDE: "33.8159351",
                        LONGITUDE: "-84.2353282",
                        MSGTIME: "10/29/2016 2:16:40 PM",
                        ROUTE: "120",
                        STOPID: "904073",
                        TIMEPOINT: "Decatur & Ponce de Leon",
                        TRIPID: "5309311",
                        VEHICLE: "1524"
                    },
                    {
                        ADHERENCE: "-3",
                        BLOCKID: "412",
                        BLOCK_ABBR: "47-2",
                        DIRECTION: "Southbound",
                        LATITUDE: "33.8802643",
                        LONGITUDE: "-84.2867628",
                        MSGTIME: "10/29/2016 2:16:42 PM",
                        ROUTE: "47",
                        STOPID: "905514",
                        TIMEPOINT: "Chamblee Station East Bus Bay",
                        TRIPID: "5339864",
                        VEHICLE: "1555"
                    },
                    {
                        ADHERENCE: "-9",
                        BLOCKID: "536",
                        BLOCK_ABBR: "81-1",
                        DIRECTION: "Northbound",
                        LATITUDE: "33.7360928",
                        LONGITUDE: "-84.4139086",
                        MSGTIME: "10/29/2016 2:16:43 PM",
                        ROUTE: "81",
                        STOPID: "123144",
                        TIMEPOINT: "Avon & Wyland",
                        TRIPID: "5316929",
                        VEHICLE: "2346"
                    },
                    {
                        ADHERENCE: "-1",
                        BLOCKID: "291",
                        BLOCK_ABBR: "194-1",
                        DIRECTION: "Northbound",
                        LATITUDE: "33.5391077",
                        LONGITUDE: "-84.3655147",
                        MSGTIME: "10/29/2016 2:16:48 PM",
                        ROUTE: "194",
                        STOPID: "212236",
                        TIMEPOINT: "Justice Center",
                        TRIPID: "5335389",
                        VEHICLE: "2381"
                    },
                    {
                        ADHERENCE: "0",
                        BLOCKID: "282",
                        BLOCK_ABBR: "191-4",
                        DIRECTION: "Southbound",
                        LATITUDE: "33.5060066",
                        LONGITUDE: "-84.360287",
                        MSGTIME: "10/29/2016 2:16:48 PM",
                        ROUTE: "191",
                        STOPID: "212236",
                        TIMEPOINT: "Justice Center",
                        TRIPID: "5309509",
                        VEHICLE: "2385"
                    },
                    {
                        ADHERENCE: "0",
                        BLOCKID: "511",
                        BLOCK_ABBR: "75-1",
                        DIRECTION: "Southbound",
                        LATITUDE: "33.7755709",
                        LONGITUDE: "-84.2819075",
                        MSGTIME: "10/29/2016 2:16:57 PM",
                        ROUTE: "75",
                        STOPID: "904264",
                        TIMEPOINT: "Avondale Station North Bay",
                        TRIPID: "5326937",
                        VEHICLE: "1501"
                    },
                    {
                        ADHERENCE: "-1",
                        BLOCKID: "497",
                        BLOCK_ABBR: "73-4",
                        DIRECTION: "Southbound",
                        LATITUDE: "33.7592862",
                        LONGITUDE: "-84.5050015",
                        MSGTIME: "10/29/2016 2:16:59 PM",
                        ROUTE: "73",
                        STOPID: "903320",
                        TIMEPOINT: "Hamilton E. Holmes Station",
                        TRIPID: "5313249",
                        VEHICLE: "2536"
                    },
                    {
                        ADHERENCE: "1",
                        BLOCKID: "16",
                        BLOCK_ABBR: "107-3",
                        DIRECTION: "Eastbound",
                        LATITUDE: "33.7506692",
                        LONGITUDE: "-84.2335483",
                        MSGTIME: "10/29/2016 2:17:03 PM",
                        ROUTE: "107",
                        STOPID: "108032",
                        TIMEPOINT: "Covington Hwy.& Glenwood Rd.",
                        TRIPID: "5337279",
                        VEHICLE: "1622"
                    },
                    {
                        ADHERENCE: "0",
                        BLOCKID: "112",
                        BLOCK_ABBR: "120-2",
                        DIRECTION: "Westbound",
                        LATITUDE: "33.7834979",
                        LONGITUDE: "-84.2694417",
                        MSGTIME: "10/29/2016 2:17:05 PM",
                        ROUTE: "120",
                        STOPID: "904264",
                        TIMEPOINT: "Avondale Station North Bay",
                        TRIPID: "0",
                        VEHICLE: "1550"
                    },
                    {
                        ADHERENCE: "0",
                        BLOCKID: "90",
                        BLOCK_ABBR: "12-1",
                        DIRECTION: "Southbound",
                        LATITUDE: "33.7810448",
                        LONGITUDE: "-84.3861746",
                        MSGTIME: "10/29/2016 2:17:13 PM",
                        ROUTE: "12",
                        STOPID: "904800",
                        TIMEPOINT: "Midtown Station",
                        TRIPID: "5338249",
                        VEHICLE: "1664"
                    },
                    {
                        ADHERENCE: "0",
                        BLOCKID: "221",
                        BLOCK_ABBR: "170-1",
                        DIRECTION: "Northbound",
                        LATITUDE: "33.7545777",
                        LONGITUDE: "-84.4693411",
                        MSGTIME: "10/29/2016 2:17:28 PM",
                        ROUTE: "170",
                        STOPID: "903320",
                        TIMEPOINT: "Hamilton E. Holmes Station",
                        TRIPID: "5322953",
                        VEHICLE: "2309"
                    },
                    {
                        ADHERENCE: "-9",
                        BLOCKID: "424",
                        BLOCK_ABBR: "5-3",
                        DIRECTION: "Northbound",
                        LATITUDE: "33.8274541",
                        LONGITUDE: "-84.3670566",
                        MSGTIME: "10/29/2016 2:17:36 PM",
                        ROUTE: "5",
                        STOPID: "902145",
                        TIMEPOINT: "Lindbergh Station",
                        TRIPID: "5342563",
                        VEHICLE: "2546"
                    },
                    {
                        ADHERENCE: "-2",
                        BLOCKID: "470",
                        BLOCK_ABBR: "66-1",
                        DIRECTION: "Northbound",
                        LATITUDE: "33.7535866",
                        LONGITUDE: "-84.4730276",
                        MSGTIME: "10/29/2016 2:17:38 PM",
                        ROUTE: "66",
                        STOPID: "900777",
                        TIMEPOINT: "Benjamin Mays & Lynhurst",
                        TRIPID: "5327009",
                        VEHICLE: "1578"
                    },
                    {
                        ADHERENCE: "0",
                        BLOCKID: "262",
                        BLOCK_ABBR: "189-1",
                        DIRECTION: "Northbound",
                        LATITUDE: "33.651908",
                        LONGITUDE: "-84.4779521",
                        MSGTIME: "10/29/2016 2:17:56 PM",
                        ROUTE: "189",
                        STOPID: "166901",
                        TIMEPOINT: "College Park Station North",
                        TRIPID: "5316845",
                        VEHICLE: "2503"
                    },
                    {
                        ADHERENCE: "-9",
                        BLOCKID: "458",
                        BLOCK_ABBR: "6-2",
                        DIRECTION: "Northbound",
                        LATITUDE: "33.7760985",
                        LONGITUDE: "-84.3481369",
                        MSGTIME: "10/29/2016 2:18:02 PM",
                        ROUTE: "6",
                        STOPID: "901155",
                        TIMEPOINT: "Inman Park Station (North Bay)",
                        TRIPID: "5347014",
                        VEHICLE: "1411"
                    },
                    {
                        ADHERENCE: "1",
                        BLOCKID: "159",
                        BLOCK_ABBR: "140-1",
                        DIRECTION: "Northbound",
                        LATITUDE: "34.0380387",
                        LONGITUDE: "-84.309667",
                        MSGTIME: "10/29/2016 2:18:07 PM",
                        ROUTE: "140",
                        STOPID: "902725",
                        TIMEPOINT: "North Springs Station",
                        TRIPID: "5309342",
                        VEHICLE: "1487"
                    },
                    {
                        ADHERENCE: "-8",
                        BLOCKID: "247",
                        BLOCK_ABBR: "181-2",
                        DIRECTION: "Southbound",
                        LATITUDE: "33.5684954",
                        LONGITUDE: "-84.5390107",
                        MSGTIME: "10/29/2016 2:18:07 PM",
                        ROUTE: "181",
                        STOPID: "183950",
                        TIMEPOINT: "South Fulton Park & Ride",
                        TRIPID: "5323556",
                        VEHICLE: "2379"
                    },
                    {
                        ADHERENCE: "-3",
                        BLOCKID: "435",
                        BLOCK_ABBR: "51-3",
                        DIRECTION: "Westbound",
                        LATITUDE: "33.7602149",
                        LONGITUDE: "-84.4694087",
                        MSGTIME: "10/29/2016 2:18:18 PM",
                        ROUTE: "51",
                        STOPID: "904547",
                        TIMEPOINT: "West Lake Ave. @ Joseph E. Boone",
                        TRIPID: "5336614",
                        VEHICLE: "1444"
                    },
                    {
                        ADHERENCE: "2",
                        BLOCKID: "451",
                        BLOCK_ABBR: "56-1",
                        DIRECTION: "Westbound",
                        LATITUDE: "33.7416052",
                        LONGITUDE: "-84.5259861",
                        MSGTIME: "10/29/2016 2:18:20 PM",
                        ROUTE: "56",
                        STOPID: "903967",
                        TIMEPOINT: "Bakers Ferry-Cornell Blvd.",
                        TRIPID: "5344253",
                        VEHICLE: "1665"
                    },
                    {
                        ADHERENCE: "0",
                        BLOCKID: "288",
                        BLOCK_ABBR: "193-3",
                        DIRECTION: "Northbound",
                        LATITUDE: "33.5321299",
                        LONGITUDE: "-84.3536401",
                        MSGTIME: "10/29/2016 2:18:22 PM",
                        ROUTE: "193",
                        STOPID: "212236",
                        TIMEPOINT: "Justice Center",
                        TRIPID: "5321182",
                        VEHICLE: "1403"
                    },
                    {
                        ADHERENCE: "-4",
                        BLOCKID: "286",
                        BLOCK_ABBR: "193-1",
                        DIRECTION: "Northbound",
                        LATITUDE: "33.6146581",
                        LONGITUDE: "-84.3497187",
                        MSGTIME: "10/29/2016 2:18:23 PM",
                        ROUTE: "193",
                        STOPID: "212570",
                        TIMEPOINT: "Clayton State University",
                        TRIPID: "5345546",
                        VEHICLE: "1405"
                    },
                    {
                        ADHERENCE: "0",
                        BLOCKID: "577",
                        BLOCK_ABBR: "86-3",
                        DIRECTION: "Westbound",
                        LATITUDE: "33.7029156",
                        LONGITUDE: "-84.1674109",
                        MSGTIME: "10/29/2016 2:18:29 PM",
                        ROUTE: "86",
                        STOPID: "134052",
                        TIMEPOINT: "Hillandale Dr. & Hillandale Pa",
                        TRIPID: "5309207",
                        VEHICLE: "1641"
                    },
                    {
                        ADHERENCE: "0",
                        BLOCKID: "356",
                        BLOCK_ABBR: "3-1",
                        DIRECTION: "Westbound",
                        LATITUDE: "33.7545857",
                        LONGITUDE: "-84.4688439",
                        MSGTIME: "10/29/2016 2:18:30 PM",
                        ROUTE: "3",
                        STOPID: "903320",
                        TIMEPOINT: "Hamilton E. Holmes Station",
                        TRIPID: "5308959",
                        VEHICLE: "1654"
                    },
                    {
                        ADHERENCE: "-5",
                        BLOCKID: "595",
                        BLOCK_ABBR: "89-2",
                        DIRECTION: "Southbound",
                        LATITUDE: "33.6247249",
                        LONGITUDE: "-84.4663319",
                        MSGTIME: "10/29/2016 2:18:40 PM",
                        ROUTE: "89",
                        STOPID: "166900",
                        TIMEPOINT: "College Park Station South",
                        TRIPID: "5338869",
                        VEHICLE: "2406"
                    },
                    {
                        ADHERENCE: "-3",
                        BLOCKID: "191",
                        BLOCK_ABBR: "150-1",
                        DIRECTION: "Eastbound",
                        LATITUDE: "33.9264495",
                        LONGITUDE: "-84.3365575",
                        MSGTIME: "10/29/2016 2:18:44 PM",
                        ROUTE: "150",
                        STOPID: "903009",
                        TIMEPOINT: "Dunwoody Station",
                        TRIPID: "5327598",
                        VEHICLE: "1586"
                    },
                    {
                        ADHERENCE: "-4",
                        BLOCKID: "14",
                        BLOCK_ABBR: "107-1",
                        DIRECTION: "Westbound",
                        LATITUDE: "33.7521435",
                        LONGITUDE: "-84.2353534",
                        MSGTIME: "10/29/2016 2:18:47 PM",
                        ROUTE: "107",
                        STOPID: "900686",
                        TIMEPOINT: "Kensington Station",
                        TRIPID: "5327272",
                        VEHICLE: "1609"
                    },
                    {
                        ADHERENCE: "0",
                        BLOCKID: "563",
                        BLOCK_ABBR: "85-1",
                        DIRECTION: "Southbound",
                        LATITUDE: "34.0662957",
                        LONGITUDE: "-84.3114532",
                        MSGTIME: "10/29/2016 2:18:48 PM",
                        ROUTE: "85",
                        STOPID: "905753",
                        TIMEPOINT: "Old Milton Pky @ Haynes Bridge",
                        TRIPID: "5313152",
                        VEHICLE: "1650"
                    },
                    {
                        ADHERENCE: "-9",
                        BLOCKID: "548",
                        BLOCK_ABBR: "83-4",
                        DIRECTION: "Eastbound",
                        LATITUDE: "33.7006246",
                        LONGITUDE: "-84.4799585",
                        MSGTIME: "10/29/2016 2:18:51 PM",
                        ROUTE: "83",
                        STOPID: "145314",
                        TIMEPOINT: "Greenbriar & Headland",
                        TRIPID: "5316931",
                        VEHICLE: "2400"
                    },
                    {
                        ADHERENCE: "-1",
                        BLOCKID: "360",
                        BLOCK_ABBR: "30-1",
                        DIRECTION: "Westbound",
                        LATITUDE: "33.8162301",
                        LONGITUDE: "-84.3524674",
                        MSGTIME: "10/29/2016 2:18:55 PM",
                        ROUTE: "30",
                        STOPID: "901596",
                        TIMEPOINT: "Briarcliff & LaVista",
                        TRIPID: "5326681",
                        VEHICLE: "1425"
                    },
                    {
                        ADHERENCE: "-1",
                        BLOCKID: "252",
                        BLOCK_ABBR: "183-4",
                        DIRECTION: "Eastbound",
                        LATITUDE: "33.6969686",
                        LONGITUDE: "-84.4300354",
                        MSGTIME: "10/29/2016 2:18:57 PM",
                        ROUTE: "183",
                        STOPID: "145314",
                        TIMEPOINT: "Greenbriar & Headland",
                        TRIPID: "5340580",
                        VEHICLE: "2549"
                    },
                    {
                        ADHERENCE: "0",
                        BLOCKID: "456",
                        BLOCK_ABBR: "6-1",
                        DIRECTION: "Southbound",
                        LATITUDE: "33.8176542",
                        LONGITUDE: "-84.3493498",
                        MSGTIME: "10/29/2016 2:18:57 PM",
                        ROUTE: "6",
                        STOPID: "902145",
                        TIMEPOINT: "Lindbergh Station",
                        TRIPID: "5326368",
                        VEHICLE: "1674"
                    },
                    {
                        ADHERENCE: "-6",
                        BLOCKID: "404",
                        BLOCK_ABBR: "4-2",
                        DIRECTION: "Southbound",
                        LATITUDE: "33.6956285",
                        LONGITUDE: "-84.3687613",
                        MSGTIME: "10/29/2016 2:19:01 PM",
                        ROUTE: "4",
                        STOPID: "151020",
                        TIMEPOINT: "Atlanta Youth Academy",
                        TRIPID: "5321348",
                        VEHICLE: "2301"
                    },
                    {
                        ADHERENCE: "0",
                        BLOCKID: "576",
                        BLOCK_ABBR: "86-2",
                        DIRECTION: "Westbound",
                        LATITUDE: "33.7724661",
                        LONGITUDE: "-84.2523285",
                        MSGTIME: "10/29/2016 2:19:02 PM",
                        ROUTE: "86",
                        STOPID: "900686",
                        TIMEPOINT: "Kensington Station",
                        TRIPID: "5312800",
                        VEHICLE: "1538"
                    },
                    {
                        ADHERENCE: "-3",
                        BLOCKID: "238",
                        BLOCK_ABBR: "180-2",
                        DIRECTION: "Northbound",
                        LATITUDE: "33.6500641",
                        LONGITUDE: "-84.4708874",
                        MSGTIME: "10/29/2016 2:19:04 PM",
                        ROUTE: "180",
                        STOPID: "165056",
                        TIMEPOINT: "Washington & Desert Dr",
                        TRIPID: "5309381",
                        VEHICLE: "1701"
                    },
                    {
                        ADHERENCE: "0",
                        BLOCKID: "537",
                        BLOCK_ABBR: "81-2",
                        DIRECTION: "Southbound",
                        LATITUDE: "33.7149646",
                        LONGITUDE: "-84.4568224",
                        MSGTIME: "10/29/2016 2:19:06 PM",
                        ROUTE: "81",
                        STOPID: "123140",
                        TIMEPOINT: "Avon & Wyland",
                        TRIPID: "5322284",
                        VEHICLE: "2341"
                    },
                    {
                        ADHERENCE: "-8",
                        BLOCKID: "327",
                        BLOCK_ABBR: "21-2",
                        DIRECTION: "Eastbound",
                        LATITUDE: "33.7467527",
                        LONGITUDE: "-84.3683547",
                        MSGTIME: "10/29/2016 2:19:11 PM",
                        ROUTE: "21",
                        STOPID: "103900",
                        TIMEPOINT: "King Memorial Station",
                        TRIPID: "5321645",
                        VEHICLE: "1678"
                    },
                    {
                        ADHERENCE: "-5",
                        BLOCKID: "240",
                        BLOCK_ABBR: "180-4",
                        DIRECTION: "Southbound",
                        LATITUDE: "33.5512185",
                        LONGITUDE: "-84.6015828",
                        MSGTIME: "10/29/2016 2:19:13 PM",
                        ROUTE: "180",
                        STOPID: "191038",
                        TIMEPOINT: "Roosevelt Hwy & B.Engram Pkwy",
                        TRIPID: "5327644",
                        VEHICLE: "2394"
                    },
                    {
                        ADHERENCE: "-7",
                        BLOCKID: "76",
                        BLOCK_ABBR: "117-3",
                        DIRECTION: "Southbound",
                        LATITUDE: "33.7867654",
                        LONGITUDE: "-84.1633879",
                        MSGTIME: "10/29/2016 2:19:20 PM",
                        ROUTE: "117",
                        STOPID: "906089",
                        TIMEPOINT: "Hairston & Rockbridge",
                        TRIPID: "5323570",
                        VEHICLE: "1554"
                    },
                    {
                        ADHERENCE: "-4",
                        BLOCKID: "584",
                        BLOCK_ABBR: "87-2",
                        DIRECTION: "Northbound",
                        LATITUDE: "33.9801422",
                        LONGITUDE: "-84.3503829",
                        MSGTIME: "10/29/2016 2:19:26 PM",
                        ROUTE: "87",
                        STOPID: "902853",
                        TIMEPOINT: "Dalrymple-Roswell",
                        TRIPID: "5312806",
                        VEHICLE: "1658"
                    },
                    {
                        ADHERENCE: "-3",
                        BLOCKID: "43",
                        BLOCK_ABBR: "114-2",
                        DIRECTION: "Northbound",
                        LATITUDE: "33.7235384",
                        LONGITUDE: "-84.2514231",
                        MSGTIME: "10/29/2016 2:19:27 PM",
                        ROUTE: "114",
                        STOPID: "130166",
                        TIMEPOINT: "Columbia Dr. & Rainbow Dr.",
                        TRIPID: "5309482",
                        VEHICLE: "1604"
                    },
                    {
                        ADHERENCE: "0",
                        BLOCKID: "403",
                        BLOCK_ABBR: "4-1",
                        DIRECTION: "Northbound",
                        LATITUDE: "33.7564357",
                        LONGITUDE: "-84.3527778",
                        MSGTIME: "10/29/2016 2:19:29 PM",
                        ROUTE: "4",
                        STOPID: "901066",
                        TIMEPOINT: "Inman Park Station (South Bay)",
                        TRIPID: "5308962",
                        VEHICLE: "2322"
                    },
                    {
                        ADHERENCE: "-3",
                        BLOCKID: "273",
                        BLOCK_ABBR: "19-2",
                        DIRECTION: "Northbound",
                        LATITUDE: "33.8012478",
                        LONGITUDE: "-84.3094183",
                        MSGTIME: "10/29/2016 2:19:30 PM",
                        ROUTE: "19",
                        STOPID: "905913",
                        TIMEPOINT: "Clairmont & North Decatur",
                        TRIPID: "5339651",
                        VEHICLE: "1601"
                    },
                    {
                        ADHERENCE: "0",
                        BLOCKID: "217",
                        BLOCK_ABBR: "165-3",
                        DIRECTION: "Westbound",
                        LATITUDE: "33.7428246",
                        LONGITUDE: "-84.5099311",
                        MSGTIME: "10/29/2016 2:19:43 PM",
                        ROUTE: "165",
                        STOPID: "903842",
                        TIMEPOINT: "Brownlee Rd. & MLKing Jr. Dr.",
                        TRIPID: "5327985",
                        VEHICLE: "2553"
                    },
                    {
                        ADHERENCE: "0",
                        BLOCKID: "185",
                        BLOCK_ABBR: "15-4",
                        DIRECTION: "Northbound",
                        LATITUDE: "33.7745048",
                        LONGITUDE: "-84.2976684",
                        MSGTIME: "10/29/2016 2:19:50 PM",
                        ROUTE: "15",
                        STOPID: "904262",
                        TIMEPOINT: "Decatur Station",
                        TRIPID: "5308992",
                        VEHICLE: "1539"
                    },
                    {
                        ADHERENCE: "0",
                        BLOCKID: "425",
                        BLOCK_ABBR: "5-4",
                        DIRECTION: "Northbound",
                        LATITUDE: "33.9227149",
                        LONGITUDE: "-84.3792412",
                        MSGTIME: "10/29/2016 2:19:52 PM",
                        ROUTE: "5",
                        STOPID: "906308",
                        TIMEPOINT: "Roswell & Hammond",
                        TRIPID: "5315904",
                        VEHICLE: "1573"
                    },
                    {
                        ADHERENCE: "0",
                        BLOCKID: "547",
                        BLOCK_ABBR: "83-3",
                        DIRECTION: "Eastbound",
                        LATITUDE: "33.7173913",
                        LONGITUDE: "-84.4255505",
                        MSGTIME: "10/29/2016 2:19:57 PM",
                        ROUTE: "83",
                        STOPID: "123900",
                        TIMEPOINT: "Oakland City Station",
                        TRIPID: "5336964",
                        VEHICLE: "2392"
                    },
                    {
                        ADHERENCE: "0",
                        BLOCKID: "279",
                        BLOCK_ABBR: "191-1",
                        DIRECTION: "Southbound",
                        LATITUDE: "33.5498522",
                        LONGITUDE: "-84.4149876",
                        MSGTIME: "10/29/2016 2:20:00 PM",
                        ROUTE: "191",
                        STOPID: "212530",
                        TIMEPOINT: "Valley Hill @ Lamar Hutcheson",
                        TRIPID: "5309510",
                        VEHICLE: "2358"
                    },
                    {
                        ADHERENCE: "3",
                        BLOCKID: "400",
                        BLOCK_ABBR: "39-7",
                        DIRECTION: "Southbound",
                        LATITUDE: "33.8257701",
                        LONGITUDE: "-84.3662985",
                        MSGTIME: "10/29/2016 2:20:01 PM",
                        ROUTE: "39",
                        STOPID: "902149",
                        TIMEPOINT: "Buford & Druid Hill",
                        TRIPID: "5343611",
                        VEHICLE: "1718"
                    },
                    {
                        ADHERENCE: "1",
                        BLOCKID: "115",
                        BLOCK_ABBR: "120-5",
                        DIRECTION: "Westbound",
                        LATITUDE: "33.8500151",
                        LONGITUDE: "-84.206272",
                        MSGTIME: "10/29/2016 2:20:05 PM",
                        ROUTE: "120",
                        STOPID: "902222",
                        TIMEPOINT: "Mountain Industrial & Sarr",
                        TRIPID: "5337315",
                        VEHICLE: "1643"
                    },
                    {
                        ADHERENCE: "1",
                        BLOCKID: "365",
                        BLOCK_ABBR: "32-1",
                        DIRECTION: "Northbound",
                        LATITUDE: "33.7190455",
                        LONGITUDE: "-84.3494686",
                        MSGTIME: "10/29/2016 2:20:08 PM",
                        ROUTE: "32",
                        STOPID: "212801",
                        TIMEPOINT: "Bouldercrest-Eastland Rd.",
                        TRIPID: "5312318",
                        VEHICLE: "2372"
                    },
                    {
                        ADHERENCE: "3",
                        BLOCKID: "283",
                        BLOCK_ABBR: "191-5",
                        DIRECTION: "Northbound",
                        LATITUDE: "33.6177761",
                        LONGITUDE: "-84.4509337",
                        MSGTIME: "10/29/2016 2:20:22 PM",
                        ROUTE: "191",
                        STOPID: "212439",
                        TIMEPOINT: "Hartsfield International Airport",
                        TRIPID: "5328963",
                        VEHICLE: "2397"
                    },
                    {
                        ADHERENCE: "-4",
                        BLOCKID: "554",
                        BLOCK_ABBR: "84-1",
                        DIRECTION: "Eastbound",
                        LATITUDE: "33.6786128",
                        LONGITUDE: "-84.4400344",
                        MSGTIME: "10/29/2016 2:20:27 PM",
                        ROUTE: "84",
                        STOPID: "166148",
                        TIMEPOINT: "Washington Rd. & Stone Rd.",
                        TRIPID: "5322301",
                        VEHICLE: "2329"
                    },
                    {
                        ADHERENCE: "-5",
                        BLOCKID: "145",
                        BLOCK_ABBR: "125-1",
                        DIRECTION: "Northbound",
                        LATITUDE: "33.8450235",
                        LONGITUDE: "-84.2560915",
                        MSGTIME: "10/29/2016 2:20:33 PM",
                        ROUTE: "125",
                        STOPID: "212941",
                        TIMEPOINT: "Montreal Rd. & Montreal Circle",
                        TRIPID: "5338239",
                        VEHICLE: "1509"
                    },
                    {
                        ADHERENCE: "4",
                        BLOCKID: "140",
                        BLOCK_ABBR: "124-2",
                        DIRECTION: "Eastbound",
                        LATITUDE: "33.8593895",
                        LONGITUDE: "-84.2189357",
                        MSGTIME: "10/29/2016 2:20:40 PM",
                        ROUTE: "124",
                        STOPID: "906160",
                        TIMEPOINT: "Pleasantdale & Tucker Norcross",
                        TRIPID: "5309491",
                        VEHICLE: "1502"
                    },
                    {
                        ADHERENCE: "-3",
                        BLOCKID: "544",
                        BLOCK_ABBR: "83-1",
                        DIRECTION: "Westbound",
                        LATITUDE: "33.6833528",
                        LONGITUDE: "-84.5030116",
                        MSGTIME: "10/29/2016 2:20:43 PM",
                        ROUTE: "83",
                        STOPID: "145024",
                        TIMEPOINT: "Greenbriar & Headland",
                        TRIPID: "5326974",
                        VEHICLE: "2319"
                    },
                    {
                        ADHERENCE: "-2",
                        BLOCKID: "294",
                        BLOCK_ABBR: "195-1",
                        DIRECTION: "Eastbound",
                        LATITUDE: "33.6399778",
                        LONGITUDE: "-84.4579021",
                        MSGTIME: "10/29/2016 2:20:45 PM",
                        ROUTE: "195",
                        STOPID: "166900",
                        TIMEPOINT: "College Park Station South",
                        TRIPID: "5318193",
                        VEHICLE: "1433"
                    },
                    {
                        ADHERENCE: "1",
                        BLOCKID: "163",
                        BLOCK_ABBR: "141-1",
                        DIRECTION: "Northbound",
                        LATITUDE: "34.0740653",
                        LONGITUDE: "-84.2911743",
                        MSGTIME: "10/29/2016 2:20:45 PM",
                        ROUTE: "141",
                        STOPID: "212884",
                        TIMEPOINT: "Old Milton Pky @ Haynes Bridge",
                        TRIPID: "5309346",
                        VEHICLE: "1458"
                    },
                    {
                        ADHERENCE: "0",
                        BLOCKID: "88",
                        BLOCK_ABBR: "119-6",
                        DIRECTION: "Westbound",
                        LATITUDE: "33.7723351",
                        LONGITUDE: "-84.2518971",
                        MSGTIME: "10/29/2016 2:20:46 PM",
                        ROUTE: "121",
                        STOPID: "900686",
                        TIMEPOINT: "Kensington Station",
                        TRIPID: "5309323",
                        VEHICLE: "1619"
                    },
                    {
                        ADHERENCE: "-1",
                        BLOCKID: "401",
                        BLOCK_ABBR: "39-8",
                        DIRECTION: "Southbound",
                        LATITUDE: "33.845807",
                        LONGITUDE: "-84.3255344",
                        MSGTIME: "10/29/2016 2:20:47 PM",
                        ROUTE: "39",
                        STOPID: "906139",
                        TIMEPOINT: "Buford & Clairmont",
                        TRIPID: "5344199",
                        VEHICLE: "1546"
                    },
                    {
                        ADHERENCE: "0",
                        BLOCKID: "228",
                        BLOCK_ABBR: "178-2",
                        DIRECTION: "Northbound",
                        LATITUDE: "33.6882789",
                        LONGITUDE: "-84.3904853",
                        MSGTIME: "10/29/2016 2:20:49 PM",
                        ROUTE: "178",
                        STOPID: "211328",
                        TIMEPOINT: "Old Hapeville & Cleveland",
                        TRIPID: "5327996",
                        VEHICLE: "2336"
                    },
                    {
                        ADHERENCE: "-8",
                        BLOCKID: "15",
                        BLOCK_ABBR: "107-2",
                        DIRECTION: "Westbound",
                        LATITUDE: "33.7386366",
                        LONGITUDE: "-84.2830518",
                        MSGTIME: "10/29/2016 2:20:50 PM",
                        ROUTE: "107",
                        STOPID: "107156",
                        TIMEPOINT: "Columbia Drive & Glenwood Ave.",
                        TRIPID: "5309255",
                        VEHICLE: "1552"
                    },
                    {
                        ADHERENCE: "-1",
                        BLOCKID: "486",
                        BLOCK_ABBR: "71-2",
                        DIRECTION: "Eastbound",
                        LATITUDE: "33.7208149",
                        LONGITUDE: "-84.4941007",
                        MSGTIME: "10/29/2016 2:20:51 PM",
                        ROUTE: "71",
                        STOPID: "120084",
                        TIMEPOINT: "Cascade & Fairburn",
                        TRIPID: "5312721",
                        VEHICLE: "2531"
                    },
                    {
                        ADHERENCE: "-1",
                        BLOCKID: "36",
                        BLOCK_ABBR: "111-3",
                        DIRECTION: "Northbound",
                        LATITUDE: "33.6976919",
                        LONGITUDE: "-84.1137393",
                        MSGTIME: "10/29/2016 2:20:53 PM",
                        ROUTE: "111",
                        STOPID: "134088",
                        TIMEPOINT: "Stonecrest Trace",
                        TRIPID: "5337287",
                        VEHICLE: "1557"
                    },
                    {
                        ADHERENCE: "-1",
                        BLOCKID: "454",
                        BLOCK_ABBR: "58-2",
                        DIRECTION: "Eastbound",
                        LATITUDE: "33.7964107",
                        LONGITUDE: "-84.4900683",
                        MSGTIME: "10/29/2016 2:20:57 PM",
                        ROUTE: "58",
                        STOPID: "902481",
                        TIMEPOINT: "Atlanta Industrial Park",
                        TRIPID: "5326636",
                        VEHICLE: "1568"
                    },
                    {
                        ADHERENCE: "-1",
                        BLOCKID: "407",
                        BLOCK_ABBR: "42-3",
                        DIRECTION: "Southbound",
                        LATITUDE: "33.7453017",
                        LONGITUDE: "-84.4003949",
                        MSGTIME: "10/29/2016 2:20:58 PM",
                        ROUTE: "42",
                        STOPID: "102236",
                        TIMEPOINT: "Alabama & Broad St.",
                        TRIPID: "5340987",
                        VEHICLE: "2410"
                    },
                    {
                        ADHERENCE: "-1",
                        BLOCKID: "293",
                        BLOCK_ABBR: "194-3",
                        DIRECTION: "Southbound",
                        LATITUDE: "33.5825647",
                        LONGITUDE: "-84.3032132",
                        MSGTIME: "10/29/2016 2:21:04 PM",
                        ROUTE: "194",
                        STOPID: "212691",
                        TIMEPOINT: "Forest Parkway @ GA-42",
                        TRIPID: "5321183",
                        VEHICLE: "2373"
                    },
                    {
                        ADHERENCE: "-3",
                        BLOCKID: "498",
                        BLOCK_ABBR: "73-5",
                        DIRECTION: "Northbound",
                        LATITUDE: "33.7251777",
                        LONGITUDE: "-84.5831731",
                        MSGTIME: "10/29/2016 2:21:07 PM",
                        ROUTE: "73",
                        STOPID: "901290",
                        TIMEPOINT: "LaGrange & Boat Rock",
                        TRIPID: "5336665",
                        VEHICLE: "2524"
                    },
                    {
                        ADHERENCE: "-1",
                        BLOCKID: "616",
                        BLOCK_ABBR: "95-3",
                        DIRECTION: "Northbound",
                        LATITUDE: "33.7351933",
                        LONGITUDE: "-84.4080404",
                        MSGTIME: "10/29/2016 2:21:11 PM",
                        ROUTE: "95",
                        STOPID: "124074",
                        TIMEPOINT: "Dill & Metropolitan Parkway",
                        TRIPID: "5332886",
                        VEHICLE: "2305"
                    },
                    {
                        ADHERENCE: "-6",
                        BLOCKID: "480",
                        BLOCK_ABBR: "68-2",
                        DIRECTION: "Westbound",
                        LATITUDE: "33.7186681",
                        LONGITUDE: "-84.4624807",
                        MSGTIME: "10/29/2016 2:21:18 PM",
                        ROUTE: "68",
                        STOPID: "122006",
                        TIMEPOINT: "Beecher-Ben.E.Mays Westbbound",
                        TRIPID: "5332548",
                        VEHICLE: "2333"
                    },
                    {
                        ADHERENCE: "-10",
                        BLOCKID: "575",
                        BLOCK_ABBR: "86-1",
                        DIRECTION: "Eastbound",
                        LATITUDE: "33.7147888",
                        LONGITUDE: "-84.2136771",
                        MSGTIME: "10/29/2016 2:21:19 PM",
                        ROUTE: "86",
                        STOPID: "131096",
                        TIMEPOINT: "Snapfingerwoods Dr. @ Wesley Cha",
                        TRIPID: "5312799",
                        VEHICLE: "1629"
                    },
                    {
                        ADHERENCE: "0",
                        BLOCKID: "225",
                        BLOCK_ABBR: "172-1",
                        DIRECTION: "Southbound",
                        LATITUDE: "33.6522669",
                        LONGITUDE: "-84.4490306",
                        MSGTIME: "10/29/2016 2:21:19 PM",
                        ROUTE: "172",
                        STOPID: "166901",
                        TIMEPOINT: "College Park Station North",
                        TRIPID: "5327628",
                        VEHICLE: "2326"
                    },
                    {
                        ADHERENCE: "-2",
                        BLOCKID: "231",
                        BLOCK_ABBR: "180-1",
                        DIRECTION: "Southbound",
                        LATITUDE: "33.6494581",
                        LONGITUDE: "-84.4676286",
                        MSGTIME: "10/29/2016 2:21:29 PM",
                        ROUTE: "180",
                        STOPID: "166901",
                        TIMEPOINT: "College Park Station North",
                        TRIPID: "5328427",
                        VEHICLE: "2375"
                    },
                    {
                        ADHERENCE: "0",
                        BLOCKID: "51",
                        BLOCK_ABBR: "115-3",
                        DIRECTION: "Northbound",
                        LATITUDE: "33.7695598",
                        LONGITUDE: "-84.2287448",
                        MSGTIME: "10/29/2016 2:21:33 PM",
                        ROUTE: "115",
                        STOPID: "903391",
                        TIMEPOINT: "Indian Creek Station (East Bay)",
                        TRIPID: "5309290",
                        VEHICLE: "1543"
                    },
                    {
                        ADHERENCE: "-4",
                        BLOCKID: "609",
                        BLOCK_ABBR: "93-1",
                        DIRECTION: "Eastbound",
                        LATITUDE: "33.6724374",
                        LONGITUDE: "-84.4289342",
                        MSGTIME: "10/29/2016 2:21:37 PM",
                        ROUTE: "93",
                        STOPID: "158066",
                        TIMEPOINT: "Bayard St. & E.Washington Ave.",
                        TRIPID: "5312818",
                        VEHICLE: "2349"
                    },
                    {
                        ADHERENCE: "-4",
                        BLOCKID: "30",
                        BLOCK_ABBR: "110-6",
                        DIRECTION: "Southbound",
                        LATITUDE: "33.8105165",
                        LONGITUDE: "-84.3925914",
                        MSGTIME: "10/29/2016 2:21:37 PM",
                        ROUTE: "110",
                        STOPID: "900644",
                        TIMEPOINT: "Peachtree Hills & Peachtree",
                        TRIPID: "5347174",
                        VEHICLE: "1461"
                    },
                    {
                        ADHERENCE: "0",
                        BLOCKID: "420",
                        BLOCK_ABBR: "5-1",
                        DIRECTION: "Southbound",
                        LATITUDE: "33.8235931",
                        LONGITUDE: "-84.3693673",
                        MSGTIME: "10/29/2016 2:21:37 PM",
                        ROUTE: "5",
                        STOPID: "902145",
                        TIMEPOINT: "Lindbergh Station",
                        TRIPID: "5326365",
                        VEHICLE: "1659"
                    },
                    {
                        ADHERENCE: "4",
                        BLOCKID: "1",
                        BLOCK_ABBR: "1-1",
                        DIRECTION: "Northbound",
                        LATITUDE: "33.8190725",
                        LONGITUDE: "-84.4483169",
                        MSGTIME: "10/29/2016 2:21:38 PM",
                        ROUTE: "1",
                        STOPID: "901452",
                        TIMEPOINT: "Chattahoochee & Southland",
                        TRIPID: "5335982",
                        VEHICLE: "1567"
                    },
                    {
                        ADHERENCE: "-1",
                        BLOCKID: "154",
                        BLOCK_ABBR: "13-1",
                        DIRECTION: "Eastbound",
                        LATITUDE: "33.7614265",
                        LONGITUDE: "-84.4377342",
                        MSGTIME: "10/29/2016 2:21:40 PM",
                        ROUTE: "13",
                        STOPID: "900232",
                        TIMEPOINT: "West Lake Station",
                        TRIPID: "5308982",
                        VEHICLE: "1443"
                    },
                    {
                        ADHERENCE: "-2",
                        BLOCKID: "216",
                        BLOCK_ABBR: "165-2",
                        DIRECTION: "Eastbound",
                        LATITUDE: "33.749926",
                        LONGITUDE: "-84.50174",
                        MSGTIME: "10/29/2016 2:21:41 PM",
                        ROUTE: "165",
                        STOPID: "903290",
                        TIMEPOINT: "Fairburn Rd. & Bejamin Mays Dr.",
                        TRIPID: "5341561",
                        VEHICLE: "2533"
                    },
                    {
                        ADHERENCE: "0",
                        BLOCKID: "445",
                        BLOCK_ABBR: "55-4",
                        DIRECTION: "Southbound",
                        LATITUDE: "33.6161668",
                        LONGITUDE: "-84.3528156",
                        MSGTIME: "10/29/2016 2:21:41 PM",
                        ROUTE: "55",
                        STOPID: "212353",
                        TIMEPOINT: "Forest Pkwy & Barlett Dr",
                        TRIPID: "5344951",
                        VEHICLE: "2192"
                    },
                    {
                        ADHERENCE: "0",
                        BLOCKID: "567",
                        BLOCK_ABBR: "85-2",
                        DIRECTION: "Southbound",
                        LATITUDE: "33.9442935",
                        LONGITUDE: "-84.3575639",
                        MSGTIME: "10/29/2016 2:21:42 PM",
                        ROUTE: "85",
                        STOPID: "902725",
                        TIMEPOINT: "North Springs Station",
                        TRIPID: "5309397",
                        VEHICLE: "1652"
                    },
                    {
                        ADHERENCE: "-1",
                        BLOCKID: "49",
                        BLOCK_ABBR: "115-1",
                        DIRECTION: "Southbound",
                        LATITUDE: "33.7532333",
                        LONGITUDE: "-84.1971199",
                        MSGTIME: "10/29/2016 2:21:47 PM",
                        ROUTE: "115",
                        STOPID: "903424",
                        TIMEPOINT: "S. Hairston & Redan Rd.",
                        TRIPID: "5344718",
                        VEHICLE: "1628"
                    },
                    {
                        ADHERENCE: "6",
                        BLOCKID: "86",
                        BLOCK_ABBR: "119-4",
                        DIRECTION: "Westbound",
                        LATITUDE: "33.7699122",
                        LONGITUDE: "-84.2358707",
                        MSGTIME: "10/29/2016 2:21:51 PM",
                        ROUTE: "119",
                        STOPID: "903391",
                        TIMEPOINT: "Indian Creek Station (East Bay)",
                        TRIPID: "5316738",
                        VEHICLE: "1515"
                    },
                    {
                        ADHERENCE: "-2",
                        BLOCKID: "519",
                        BLOCK_ABBR: "78-1",
                        DIRECTION: "Eastbound",
                        LATITUDE: "33.6812381",
                        LONGITUDE: "-84.4273188",
                        MSGTIME: "10/29/2016 2:21:53 PM",
                        ROUTE: "78",
                        STOPID: "146900",
                        TIMEPOINT: "East Point Station",
                        TRIPID: "5342153",
                        VEHICLE: "2398"
                    },
                    {
                        ADHERENCE: "-1",
                        BLOCKID: "35",
                        BLOCK_ABBR: "111-2",
                        DIRECTION: "Northbound",
                        LATITUDE: "33.7631903",
                        LONGITUDE: "-84.2228197",
                        MSGTIME: "10/29/2016 2:21:53 PM",
                        ROUTE: "111",
                        STOPID: "108096",
                        TIMEPOINT: "Covington Hwy.& Glenwood Rd.",
                        TRIPID: "5327284",
                        VEHICLE: "1603"
                    },
                    {
                        ADHERENCE: "-1",
                        BLOCKID: "155",
                        BLOCK_ABBR: "13-2",
                        DIRECTION: "Westbound",
                        LATITUDE: "33.744947",
                        LONGITUDE: "-84.4048656",
                        MSGTIME: "10/29/2016 2:21:54 PM",
                        ROUTE: "13",
                        STOPID: "102274",
                        TIMEPOINT: "Alabama & Forsyth",
                        TRIPID: "5326263",
                        VEHICLE: "1579"
                    },
                    {
                        ADHERENCE: "0",
                        BLOCKID: "328",
                        BLOCK_ABBR: "21-3",
                        DIRECTION: "Westbound",
                        LATITUDE: "33.7495911",
                        LONGITUDE: "-84.3853649",
                        MSGTIME: "10/29/2016 2:21:54 PM",
                        ROUTE: "21",
                        STOPID: "210431",
                        TIMEPOINT: "Georgia State Station",
                        TRIPID: "5347027",
                        VEHICLE: "1414"
                    },
                    {
                        ADHERENCE: "-3",
                        BLOCKID: "183",
                        BLOCK_ABBR: "15-2",
                        DIRECTION: "Northbound",
                        LATITUDE: "33.7107965",
                        LONGITUDE: "-84.2716043",
                        MSGTIME: "10/29/2016 2:21:59 PM",
                        ROUTE: "15",
                        STOPID: "130200",
                        TIMEPOINT: "South DeKalb Mall",
                        TRIPID: "5315938",
                        VEHICLE: "1506"
                    },
                    {
                        ADHERENCE: "0",
                        BLOCKID: "476",
                        BLOCK_ABBR: "67-1",
                        DIRECTION: "Eastbound",
                        LATITUDE: "33.7364193",
                        LONGITUDE: "-84.4134182",
                        MSGTIME: "10/29/2016 2:22:11 PM",
                        ROUTE: "67",
                        STOPID: "114900",
                        TIMEPOINT: "West End Station",
                        TRIPID: "5344258",
                        VEHICLE: "2332"
                    },
                    {
                        ADHERENCE: "-6",
                        BLOCKID: "591",
                        BLOCK_ABBR: "89-1",
                        DIRECTION: "Northbound",
                        LATITUDE: "33.5692689",
                        LONGITUDE: "-84.5393085",
                        MSGTIME: "10/29/2016 2:22:12 PM",
                        ROUTE: "89",
                        STOPID: "900069",
                        TIMEPOINT: "Union Station Mall",
                        TRIPID: "5344190",
                        VEHICLE: "2364"
                    },
                    {
                        ADHERENCE: "-2",
                        BLOCKID: "227",
                        BLOCK_ABBR: "178-1",
                        DIRECTION: "Southbound",
                        LATITUDE: "33.6972387",
                        LONGITUDE: "-84.4122456",
                        MSGTIME: "10/29/2016 2:22:17 PM",
                        ROUTE: "178",
                        STOPID: "136901",
                        TIMEPOINT: "Lakewood Station",
                        TRIPID: "5337633",
                        VEHICLE: "2323"
                    },
                    {
                        ADHERENCE: "-5",
                        BLOCKID: "10",
                        BLOCK_ABBR: "103-1",
                        DIRECTION: "Northbound",
                        LATITUDE: "33.9369987",
                        LONGITUDE: "-84.2865682",
                        MSGTIME: "10/29/2016 2:22:18 PM",
                        ROUTE: "103",
                        STOPID: "905716",
                        TIMEPOINT: "Peeler & Shallowford",
                        TRIPID: "5312839",
                        VEHICLE: "1630"
                    },
                    {
                        ADHERENCE: "0",
                        BLOCKID: "98",
                        BLOCK_ABBR: "12-3",
                        DIRECTION: "Northbound",
                        LATITUDE: "33.8780778",
                        LONGITUDE: "-84.4692179",
                        MSGTIME: "10/29/2016 2:22:20 PM",
                        ROUTE: "12",
                        STOPID: "900079",
                        TIMEPOINT: "Cumberland Transfer Center",
                        TRIPID: "5328998",
                        VEHICLE: "1441"
                    },
                    {
                        ADHERENCE: "2",
                        BLOCKID: "58",
                        BLOCK_ABBR: "116-1",
                        DIRECTION: "Westbound",
                        LATITUDE: "33.6923165",
                        LONGITUDE: "-84.0917998",
                        MSGTIME: "10/29/2016 2:22:21 PM",
                        ROUTE: "116",
                        STOPID: "134088",
                        TIMEPOINT: "Mall Pkwy @ Stonecrest Mall",
                        TRIPID: "5340348",
                        VEHICLE: "1534"
                    },
                    {
                        ADHERENCE: "-1",
                        BLOCKID: "28",
                        BLOCK_ABBR: "110-4",
                        DIRECTION: "Southbound",
                        LATITUDE: "33.8437555",
                        LONGITUDE: "-84.3712329",
                        MSGTIME: "10/29/2016 2:22:22 PM",
                        ROUTE: "110",
                        STOPID: "905889",
                        TIMEPOINT: "Buckhead Station",
                        TRIPID: "5327391",
                        VEHICLE: "1648"
                    },
                    {
                        ADHERENCE: "-3",
                        BLOCKID: "526",
                        BLOCK_ABBR: "79-1",
                        DIRECTION: "Westbound",
                        LATITUDE: "33.6848279",
                        LONGITUDE: "-84.4921926",
                        MSGTIME: "10/29/2016 2:22:30 PM",
                        ROUTE: "79",
                        STOPID: "145086",
                        TIMEPOINT: "Greenbriar & Headland",
                        TRIPID: "5327615",
                        VEHICLE: "2352"
                    },
                    {
                        ADHERENCE: "-5",
                        BLOCKID: "305",
                        BLOCK_ABBR: "2-1",
                        DIRECTION: "Westbound",
                        LATITUDE: "33.7738053",
                        LONGITUDE: "-84.3622419",
                        MSGTIME: "10/29/2016 2:22:31 PM",
                        ROUTE: "2",
                        STOPID: "211524",
                        TIMEPOINT: "Highland & Ponce de Leon",
                        TRIPID: "5326351",
                        VEHICLE: "1421"
                    },
                    {
                        ADHERENCE: "4",
                        BLOCKID: "471",
                        BLOCK_ABBR: "66-2",
                        DIRECTION: "Southbound",
                        LATITUDE: "33.6876191",
                        LONGITUDE: "-84.50626",
                        MSGTIME: "10/29/2016 2:22:32 PM",
                        ROUTE: "66",
                        STOPID: "145024",
                        TIMEPOINT: "Greenbriar & Headland",
                        TRIPID: "5312394",
                        VEHICLE: "1585"
                    },
                    {
                        ADHERENCE: "-21",
                        BLOCKID: "287",
                        BLOCK_ABBR: "193-2",
                        DIRECTION: "Northbound",
                        LATITUDE: "33.6774275",
                        LONGITUDE: "-84.440568",
                        MSGTIME: "10/29/2016 2:22:34 PM",
                        ROUTE: "193",
                        STOPID: "146900",
                        TIMEPOINT: "East Point Station",
                        TRIPID: "5318184",
                        VEHICLE: "1545"
                    },
                    {
                        ADHERENCE: "-3",
                        BLOCKID: "352",
                        BLOCK_ABBR: "27-2",
                        DIRECTION: "Southbound",
                        LATITUDE: "33.7933015",
                        LONGITUDE: "-84.3725369",
                        MSGTIME: "10/29/2016 2:22:39 PM",
                        ROUTE: "27",
                        STOPID: "901723",
                        TIMEPOINT: "Piedmont-Monroe",
                        TRIPID: "5336308",
                        VEHICLE: "1589"
                    },
                    {
                        ADHERENCE: "-6",
                        BLOCKID: "549",
                        BLOCK_ABBR: "83-5",
                        DIRECTION: "Eastbound",
                        LATITUDE: "33.6899646",
                        LONGITUDE: "-84.5071216",
                        MSGTIME: "10/29/2016 2:22:40 PM",
                        ROUTE: "83",
                        STOPID: "144950",
                        TIMEPOINT: "Barge Road Park & Ride Lot",
                        TRIPID: "5332836",
                        VEHICLE: "2405"
                    },
                    {
                        ADHERENCE: "-1",
                        BLOCKID: "114",
                        BLOCK_ABBR: "120-4",
                        DIRECTION: "Westbound",
                        LATITUDE: "33.8209055",
                        LONGITUDE: "-84.2082472",
                        MSGTIME: "10/29/2016 2:22:41 PM",
                        ROUTE: "120",
                        STOPID: "902109",
                        TIMEPOINT: "N. Hairston & Ponce de Leon",
                        TRIPID: "5322653",
                        VEHICLE: "1415"
                    },
                    {
                        ADHERENCE: "0",
                        BLOCKID: "520",
                        BLOCK_ABBR: "78-2",
                        DIRECTION: "Westbound",
                        LATITUDE: "33.6783941",
                        LONGITUDE: "-84.4400386",
                        MSGTIME: "10/29/2016 2:22:52 PM",
                        ROUTE: "78",
                        STOPID: "146900",
                        TIMEPOINT: "East Point Station",
                        TRIPID: "5309163",
                        VEHICLE: "2330"
                    },
                    {
                        ADHERENCE: "-3",
                        BLOCKID: "431",
                        BLOCK_ABBR: "50-1",
                        DIRECTION: "Westbound",
                        LATITUDE: "33.7768881",
                        LONGITUDE: "-84.4602225",
                        MSGTIME: "10/29/2016 2:22:53 PM",
                        ROUTE: "50",
                        STOPID: "904394",
                        TIMEPOINT: "DLHollow & Hollywood",
                        TRIPID: "5321962",
                        VEHICLE: "1575"
                    },
                    {
                        ADHERENCE: "-4",
                        BLOCKID: "329",
                        BLOCK_ABBR: "21-4",
                        DIRECTION: "Westbound",
                        LATITUDE: "33.7470696",
                        LONGITUDE: "-84.2921129",
                        MSGTIME: "10/29/2016 2:22:56 PM",
                        ROUTE: "21",
                        STOPID: "106433",
                        TIMEPOINT: "Candler & Memorial",
                        TRIPID: "5336293",
                        VEHICLE: "1618"
                    },
                    {
                        ADHERENCE: "-2",
                        BLOCKID: "9",
                        BLOCK_ABBR: "102-2",
                        DIRECTION: "Westbound",
                        LATITUDE: "33.7584338",
                        LONGITUDE: "-84.3482711",
                        MSGTIME: "10/29/2016 2:23:03 PM",
                        ROUTE: "102",
                        STOPID: "904322",
                        TIMEPOINT: "Edgewood-Candler Park Station",
                        TRIPID: "5346182",
                        VEHICLE: "1438"
                    },
                    {
                        ADHERENCE: "-2",
                        BLOCKID: "383",
                        BLOCK_ABBR: "36-2",
                        DIRECTION: "Westbound",
                        LATITUDE: "33.7816031",
                        LONGITUDE: "-84.3849858",
                        MSGTIME: "10/29/2016 2:23:06 PM",
                        ROUTE: "36",
                        STOPID: "906327",
                        TIMEPOINT: "10th Chs Allen",
                        TRIPID: "5309524",
                        VEHICLE: "1483"
                    },
                    {
                        ADHERENCE: "-2",
                        BLOCKID: "555",
                        BLOCK_ABBR: "84-2",
                        DIRECTION: "Westbound",
                        LATITUDE: "33.6757921",
                        LONGITUDE: "-84.448026",
                        MSGTIME: "10/29/2016 2:23:09 PM",
                        ROUTE: "84",
                        STOPID: "146900",
                        TIMEPOINT: "East Point Station",
                        TRIPID: "5312788",
                        VEHICLE: "2354"
                    },
                    {
                        ADHERENCE: "1",
                        BLOCKID: "512",
                        BLOCK_ABBR: "75-2",
                        DIRECTION: "Southbound",
                        LATITUDE: "33.8573741",
                        LONGITUDE: "-84.1905912",
                        MSGTIME: "10/29/2016 2:23:11 PM",
                        ROUTE: "75",
                        STOPID: "905279",
                        TIMEPOINT: "N.Royal Atlanta & S.Royal Atlant",
                        TRIPID: "5322018",
                        VEHICLE: "1626"
                    },
                    {
                        ADHERENCE: "-11",
                        BLOCKID: "351",
                        BLOCK_ABBR: "27-1",
                        DIRECTION: "Northbound",
                        LATITUDE: "33.8117311",
                        LONGITUDE: "-84.3556627",
                        MSGTIME: "10/29/2016 2:23:12 PM",
                        ROUTE: "27",
                        STOPID: "901742",
                        TIMEPOINT: "Cheshire Bridge & Piedmont",
                        TRIPID: "5321658",
                        VEHICLE: "1655"
                    },
                    {
                        ADHERENCE: "-1",
                        BLOCKID: "139",
                        BLOCK_ABBR: "124-1",
                        DIRECTION: "Westbound",
                        LATITUDE: "33.9092861",
                        LONGITUDE: "-84.2665398",
                        MSGTIME: "10/29/2016 2:23:12 PM",
                        ROUTE: "124",
                        STOPID: "905375",
                        TIMEPOINT: "Buford Highway & Oakcliff",
                        TRIPID: "5322670",
                        VEHICLE: "1608"
                    },
                    {
                        ADHERENCE: "-7",
                        BLOCKID: "89",
                        BLOCK_ABBR: "119-7",
                        DIRECTION: "Eastbound",
                        LATITUDE: "33.819365",
                        LONGITUDE: "-84.1851191",
                        MSGTIME: "10/29/2016 2:23:20 PM",
                        ROUTE: "121",
                        STOPID: "121023",
                        TIMEPOINT: "N. Hairston & Ponce de Leon",
                        TRIPID: "5339094",
                        VEHICLE: "1507"
                    },
                    {
                        ADHERENCE: "0",
                        BLOCKID: "299",
                        BLOCK_ABBR: "196-4",
                        DIRECTION: "Northbound",
                        LATITUDE: "33.6511934",
                        LONGITUDE: "-84.4486255",
                        MSGTIME: "10/29/2016 2:23:24 PM",
                        ROUTE: "196",
                        STOPID: "166900",
                        TIMEPOINT: "College Park Station South",
                        TRIPID: "5328719",
                        VEHICLE: "1422"
                    },
                    {
                        ADHERENCE: "-5",
                        BLOCKID: "281",
                        BLOCK_ABBR: "191-3",
                        DIRECTION: "Southbound",
                        LATITUDE: "33.6348727",
                        LONGITUDE: "-84.4573982",
                        MSGTIME: "10/29/2016 2:23:25 PM",
                        ROUTE: "191",
                        STOPID: "166900",
                        TIMEPOINT: "College Park Station South",
                        TRIPID: "5338229",
                        VEHICLE: "2389"
                    },
                    {
                        ADHERENCE: "-4",
                        BLOCKID: "405",
                        BLOCK_ABBR: "42-1",
                        DIRECTION: "Northbound",
                        LATITUDE: "33.7170754",
                        LONGITUDE: "-84.3933911",
                        MSGTIME: "10/29/2016 2:23:36 PM",
                        ROUTE: "42",
                        STOPID: "900033",
                        TIMEPOINT: "Moury & Middleton",
                        TRIPID: "5316332",
                        VEHICLE: "2362"
                    },
                    {
                        ADHERENCE: "-1",
                        BLOCKID: "433",
                        BLOCK_ABBR: "51-1",
                        DIRECTION: "Westbound",
                        LATITUDE: "33.7537314",
                        LONGITUDE: "-84.3926971",
                        MSGTIME: "10/29/2016 2:23:36 PM",
                        ROUTE: "51",
                        STOPID: "102258",
                        TIMEPOINT: "Alabama & Broad St.",
                        TRIPID: "5332507",
                        VEHICLE: "1668"
                    },
                    {
                        ADHERENCE: "-2",
                        BLOCKID: "87",
                        BLOCK_ABBR: "119-5",
                        DIRECTION: "Westbound",
                        LATITUDE: "33.8074519",
                        LONGITUDE: "-84.1853597",
                        MSGTIME: "10/29/2016 2:23:42 PM",
                        ROUTE: "121",
                        STOPID: "211482",
                        TIMEPOINT: "Memorial Drive Park/Ride",
                        TRIPID: "5327319",
                        VEHICLE: "1504"
                    },
                    {
                        ADHERENCE: "-5",
                        BLOCKID: "596",
                        BLOCK_ABBR: "89-3",
                        DIRECTION: "Northbound",
                        LATITUDE: "33.624738",
                        LONGITUDE: "-84.4713148",
                        MSGTIME: "10/29/2016 2:23:47 PM",
                        ROUTE: "89",
                        STOPID: "176104",
                        TIMEPOINT: "Godby & Old National",
                        TRIPID: "5332870",
                        VEHICLE: "2367"
                    },
                    {
                        ADHERENCE: "-3",
                        BLOCKID: "529",
                        BLOCK_ABBR: "79-4",
                        DIRECTION: "Eastbound",
                        LATITUDE: "33.6959454",
                        LONGITUDE: "-84.4573401",
                        MSGTIME: "10/29/2016 2:23:51 PM",
                        ROUTE: "79",
                        STOPID: "146370",
                        TIMEPOINT: "Delowe Dr. & Headland Dr",
                        TRIPID: "5313115",
                        VEHICLE: "2348"
                    },
                    {
                        ADHERENCE: "0",
                        BLOCKID: "413",
                        BLOCK_ABBR: "49-1",
                        DIRECTION: "Northbound",
                        LATITUDE: "33.7536685",
                        LONGITUDE: "-84.3923333",
                        MSGTIME: "10/29/2016 2:24:01 PM",
                        ROUTE: "49",
                        STOPID: "140178",
                        TIMEPOINT: "Henry Thomas & Kipling Street",
                        TRIPID: "5321952",
                        VEHICLE: "2353"
                    },
                    {
                        ADHERENCE: "0",
                        BLOCKID: "396",
                        BLOCK_ABBR: "39-3",
                        DIRECTION: "Northbound",
                        LATITUDE: "33.9026",
                        LONGITUDE: "-84.2803211",
                        MSGTIME: "10/29/2016 2:24:03 PM",
                        ROUTE: "39",
                        STOPID: "905508",
                        TIMEPOINT: "Doraville Station",
                        TRIPID: "5342109",
                        VEHICLE: "1715"
                    },
                    {
                        ADHERENCE: "-5",
                        BLOCKID: "254",
                        BLOCK_ABBR: "186-2",
                        DIRECTION: "Westbound",
                        LATITUDE: "33.7110597",
                        LONGITUDE: "-84.271577",
                        MSGTIME: "10/29/2016 2:24:05 PM",
                        ROUTE: "186",
                        STOPID: "130122",
                        TIMEPOINT: "Rainbow Dr & Candler",
                        TRIPID: "5328439",
                        VEHICLE: "1551"
                    },
                    {
                        ADHERENCE: "-25",
                        BLOCKID: "492",
                        BLOCK_ABBR: "71-8",
                        DIRECTION: "Westbound",
                        LATITUDE: "33.7342536",
                        LONGITUDE: "-84.5320205",
                        MSGTIME: "10/29/2016 2:24:08 PM",
                        ROUTE: "71",
                        STOPID: "900861",
                        TIMEPOINT: "Country Squire Apts",
                        TRIPID: "5344171",
                        VEHICLE: "2543"
                    },
                    {
                        ADHERENCE: "-2",
                        BLOCKID: "29",
                        BLOCK_ABBR: "110-5",
                        DIRECTION: "Northbound",
                        LATITUDE: "33.7714503",
                        LONGITUDE: "-84.3850262",
                        MSGTIME: "10/29/2016 2:24:09 PM",
                        ROUTE: "110",
                        STOPID: "904673",
                        TIMEPOINT: "Peachtree & North",
                        TRIPID: "5322602",
                        VEHICLE: "1450"
                    },
                    {
                        ADHERENCE: "1",
                        BLOCKID: "612",
                        BLOCK_ABBR: "95-1",
                        DIRECTION: "Northbound",
                        LATITUDE: "33.6758332",
                        LONGITUDE: "-84.40858",
                        MSGTIME: "10/29/2016 2:24:09 PM",
                        ROUTE: "95",
                        STOPID: "148044",
                        TIMEPOINT: "Dogwood Ave & King Arnold St",
                        TRIPID: "5327252",
                        VEHICLE: "2335"
                    },
                    {
                        ADHERENCE: "0",
                        BLOCKID: "452",
                        BLOCK_ABBR: "56-2",
                        DIRECTION: "Eastbound",
                        LATITUDE: "33.7545146",
                        LONGITUDE: "-84.4690988",
                        MSGTIME: "10/29/2016 2:24:10 PM",
                        ROUTE: "56",
                        STOPID: "903320",
                        TIMEPOINT: "Hamilton E. Holmes Station",
                        TRIPID: "5343850",
                        VEHICLE: "1447"
                    },
                    {
                        ADHERENCE: "4",
                        BLOCKID: "568",
                        BLOCK_ABBR: "85-3",
                        DIRECTION: "Northbound",
                        LATITUDE: "34.06862",
                        LONGITUDE: "-84.2731926",
                        MSGTIME: "10/29/2016 2:24:11 PM",
                        ROUTE: "85",
                        STOPID: "212886",
                        TIMEPOINT: "Old Milton Pky @ Haynes Bridge",
                        TRIPID: "5341587",
                        VEHICLE: "1660"
                    },
                    {
                        ADHERENCE: "1",
                        BLOCKID: "165",
                        BLOCK_ABBR: "141-3",
                        DIRECTION: "Southbound",
                        LATITUDE: "34.0819939",
                        LONGITUDE: "-84.2948532",
                        MSGTIME: "10/29/2016 2:24:11 PM",
                        ROUTE: "141",
                        STOPID: "902981",
                        TIMEPOINT: "Windward Pkwy & State Road-9",
                        TRIPID: "5322926",
                        VEHICLE: "2501"
                    },
                    {
                        ADHERENCE: "0",
                        BLOCKID: "290",
                        BLOCK_ABBR: "193-5",
                        DIRECTION: "Southbound",
                        LATITUDE: "33.53789",
                        LONGITUDE: "-84.3513339",
                        MSGTIME: "10/29/2016 2:24:12 PM",
                        ROUTE: "193",
                        STOPID: "212468",
                        TIMEPOINT: "Jonesboro@ Hwy 138",
                        TRIPID: "5316857",
                        VEHICLE: "1549"
                    },
                    {
                        ADHERENCE: "-3",
                        BLOCKID: "347",
                        BLOCK_ABBR: "26-1",
                        DIRECTION: "Eastbound",
                        LATITUDE: "33.8024923",
                        LONGITUDE: "-84.4580003",
                        MSGTIME: "10/29/2016 2:24:14 PM",
                        ROUTE: "26",
                        STOPID: "901435",
                        TIMEPOINT: "Perry Heights",
                        TRIPID: "5332188",
                        VEHICLE: "2545"
                    },
                    {
                        ADHERENCE: "-13",
                        BLOCKID: "137",
                        BLOCK_ABBR: "123-2",
                        DIRECTION: "Northbound",
                        LATITUDE: "33.7896718",
                        LONGITUDE: "-84.287448",
                        MSGTIME: "10/29/2016 2:24:22 PM",
                        ROUTE: "123",
                        STOPID: "900979",
                        TIMEPOINT: "DeKalb Medical Center",
                        TRIPID: "5333212",
                        VEHICLE: "1432"
                    },
                    {
                        ADHERENCE: "-3",
                        BLOCKID: "374",
                        BLOCK_ABBR: "33-2",
                        DIRECTION: "Southbound",
                        LATITUDE: "33.8862352",
                        LONGITUDE: "-84.3065134",
                        MSGTIME: "10/29/2016 2:24:24 PM",
                        ROUTE: "33",
                        STOPID: "905514",
                        TIMEPOINT: "Chamblee Station East Bus Bay",
                        TRIPID: "5309041",
                        VEHICLE: "1408"
                    },
                    {
                        ADHERENCE: "0",
                        BLOCKID: "406",
                        BLOCK_ABBR: "42-2",
                        DIRECTION: "Southbound",
                        LATITUDE: "33.7009139",
                        LONGITUDE: "-84.4295698",
                        MSGTIME: "10/29/2016 2:24:25 PM",
                        ROUTE: "42",
                        STOPID: "136901",
                        TIMEPOINT: "Lakewood Station",
                        TRIPID: "5312193",
                        VEHICLE: "2391"
                    },
                    {
                        ADHERENCE: "-1",
                        BLOCKID: "239",
                        BLOCK_ABBR: "180-3",
                        DIRECTION: "Northbound",
                        LATITUDE: "33.580621",
                        LONGITUDE: "-84.5527264",
                        MSGTIME: "10/29/2016 2:24:28 PM",
                        ROUTE: "180",
                        STOPID: "190064",
                        TIMEPOINT: "Roosevelt Hwy & B.Engram Pkwy",
                        TRIPID: "5340573",
                        VEHICLE: "2390"
                    },
                    {
                        ADHERENCE: "0",
                        BLOCKID: "52",
                        BLOCK_ABBR: "115-4",
                        DIRECTION: "Southbound",
                        LATITUDE: "33.712792",
                        LONGITUDE: "-84.106322",
                        MSGTIME: "10/29/2016 2:24:28 PM",
                        ROUTE: "115",
                        STOPID: "134020",
                        TIMEPOINT: "Main St.& Swift St.",
                        TRIPID: "5312873",
                        VEHICLE: "1413"
                    },
                    {
                        ADHERENCE: "0",
                        BLOCKID: "623",
                        BLOCK_ABBR: "99-1",
                        DIRECTION: "Northbound",
                        LATITUDE: "33.754074",
                        LONGITUDE: "-84.3742739",
                        MSGTIME: "10/29/2016 2:24:31 PM",
                        ROUTE: "99",
                        STOPID: "103900",
                        TIMEPOINT: "King Memorial Station",
                        TRIPID: "5342761",
                        VEHICLE: "1662"
                    },
                    {
                        ADHERENCE: "0",
                        BLOCKID: "415",
                        BLOCK_ABBR: "49-3",
                        DIRECTION: "Northbound",
                        LATITUDE: "33.7536647",
                        LONGITUDE: "-84.3922564",
                        MSGTIME: "10/29/2016 2:24:33 PM",
                        ROUTE: "49",
                        STOPID: "102274",
                        TIMEPOINT: "Alabama & Forsyth",
                        TRIPID: "5312360",
                        VEHICLE: "2230"
                    },
                    {
                        ADHERENCE: "0",
                        BLOCKID: "246",
                        BLOCK_ABBR: "181-1",
                        DIRECTION: "Northbound",
                        LATITUDE: "33.6776685",
                        LONGITUDE: "-84.4405361",
                        MSGTIME: "10/29/2016 2:24:34 PM",
                        ROUTE: "181",
                        STOPID: "146900",
                        TIMEPOINT: "East Point Station",
                        TRIPID: "5328235",
                        VEHICLE: "2409"
                    },
                    {
                        ADHERENCE: "-2",
                        BLOCKID: "373",
                        BLOCK_ABBR: "33-1",
                        DIRECTION: "Northbound",
                        LATITUDE: "33.8390605",
                        LONGITUDE: "-84.35804",
                        MSGTIME: "10/29/2016 2:24:35 PM",
                        ROUTE: "33",
                        STOPID: "905666",
                        TIMEPOINT: "Lenox Station",
                        TRIPID: "5321670",
                        VEHICLE: "1683"
                    },
                    {
                        ADHERENCE: "0",
                        BLOCKID: "26",
                        BLOCK_ABBR: "110-2",
                        DIRECTION: "Southbound",
                        LATITUDE: "33.7631376",
                        LONGITUDE: "-84.3867896",
                        MSGTIME: "10/29/2016 2:24:38 PM",
                        ROUTE: "110",
                        STOPID: "905031",
                        TIMEPOINT: "Peachtree & North",
                        TRIPID: "5327390",
                        VEHICLE: "1656"
                    },
                    {
                        ADHERENCE: "-1",
                        BLOCKID: "610",
                        BLOCK_ABBR: "93-2",
                        DIRECTION: "Westbound",
                        LATITUDE: "33.6786886",
                        LONGITUDE: "-84.465942",
                        MSGTIME: "10/29/2016 2:24:42 PM",
                        ROUTE: "93",
                        STOPID: "146288",
                        TIMEPOINT: "Delowe & Dorsey",
                        TRIPID: "5309224",
                        VEHICLE: "2302"
                    },
                    {
                        ADHERENCE: "-4",
                        BLOCKID: "361",
                        BLOCK_ABBR: "30-2",
                        DIRECTION: "Eastbound",
                        LATITUDE: "33.8175841",
                        LONGITUDE: "-84.3125543",
                        MSGTIME: "10/29/2016 2:24:44 PM",
                        ROUTE: "30",
                        STOPID: "901778",
                        TIMEPOINT: "Druid Hills & LaVista",
                        TRIPID: "5309034",
                        VEHICLE: "1638"
                    },
                    {
                        ADHERENCE: "0",
                        BLOCKID: "17",
                        BLOCK_ABBR: "107-4",
                        DIRECTION: "Eastbound",
                        LATITUDE: "33.7387632",
                        LONGITUDE: "-84.2879048",
                        MSGTIME: "10/29/2016 2:24:47 PM",
                        ROUTE: "107",
                        STOPID: "106216",
                        TIMEPOINT: "Candler & Glenwood",
                        TRIPID: "5337280",
                        VEHICLE: "1617"
                    },
                    {
                        ADHERENCE: "-2",
                        BLOCKID: "395",
                        BLOCK_ABBR: "39-2",
                        DIRECTION: "Southbound",
                        LATITUDE: "33.8834245",
                        LONGITUDE: "-84.289531",
                        MSGTIME: "10/29/2016 2:24:47 PM",
                        ROUTE: "39",
                        STOPID: "905540",
                        TIMEPOINT: "Buford & Chamblee Tucker",
                        TRIPID: "5316005",
                        VEHICLE: "1708"
                    },
                    {
                        ADHERENCE: "-3",
                        BLOCKID: "85",
                        BLOCK_ABBR: "119-3",
                        DIRECTION: "Westbound",
                        LATITUDE: "33.8014811",
                        LONGITUDE: "-84.1948973",
                        MSGTIME: "10/29/2016 2:24:53 PM",
                        ROUTE: "121",
                        STOPID: "211710",
                        TIMEPOINT: "Memorial & N.Hairston",
                        TRIPID: "5342382",
                        VEHICLE: "1430"
                    },
                    {
                        ADHERENCE: "-2",
                        BLOCKID: "113",
                        BLOCK_ABBR: "120-3",
                        DIRECTION: "Westbound",
                        LATITUDE: "33.7932546",
                        LONGITUDE: "-84.2641023",
                        MSGTIME: "10/29/2016 2:24:54 PM",
                        ROUTE: "120",
                        STOPID: "904010",
                        TIMEPOINT: "Decatur & Ponce de Leon",
                        TRIPID: "5327669",
                        VEHICLE: "1525"
                    },
                    {
                        ADHERENCE: "-6",
                        BLOCKID: "399",
                        BLOCK_ABBR: "39-6",
                        DIRECTION: "Northbound",
                        LATITUDE: "33.8351908",
                        LONGITUDE: "-84.3383849",
                        MSGTIME: "10/29/2016 2:24:55 PM",
                        ROUTE: "39",
                        STOPID: "902150",
                        TIMEPOINT: "Buford & Druid Hill",
                        TRIPID: "5321686",
                        VEHICLE: "1703"
                    },
                    {
                        ADHERENCE: "-4",
                        BLOCKID: "75",
                        BLOCK_ABBR: "117-2",
                        DIRECTION: "Northbound",
                        LATITUDE: "33.7871393",
                        LONGITUDE: "-84.1951497",
                        MSGTIME: "10/29/2016 2:24:58 PM",
                        ROUTE: "117",
                        STOPID: "903737",
                        TIMEPOINT: "Hairston & Rockbridge",
                        TRIPID: "5323574",
                        VEHICLE: "1510"
                    },
                    {
                        ADHERENCE: "-1",
                        BLOCKID: "570",
                        BLOCK_ABBR: "85-5",
                        DIRECTION: "Southbound",
                        LATITUDE: "34.038791",
                        LONGITUDE: "-84.309215",
                        MSGTIME: "10/29/2016 2:25:01 PM",
                        ROUTE: "85",
                        STOPID: "903177",
                        TIMEPOINT: "Mansell Park/Ride",
                        TRIPID: "5342753",
                        VEHICLE: "1663"
                    },
                    {
                        ADHERENCE: "1",
                        BLOCKID: "187",
                        BLOCK_ABBR: "15-6",
                        DIRECTION: "Southbound",
                        LATITUDE: "33.6825421",
                        LONGITUDE: "-84.2727",
                        MSGTIME: "10/29/2016 2:25:08 PM",
                        ROUTE: "15",
                        STOPID: "153090",
                        TIMEPOINT: "Clifton Springs & Panthersville",
                        TRIPID: "5308991",
                        VEHICLE: "1680"
                    },
                    {
                        ADHERENCE: "-3",
                        BLOCKID: "152",
                        BLOCK_ABBR: "126-1",
                        DIRECTION: "Southbound",
                        LATITUDE: "33.9570434",
                        LONGITUDE: "-84.3031889",
                        MSGTIME: "10/29/2016 2:25:10 PM",
                        ROUTE: "126",
                        STOPID: "902690",
                        TIMEPOINT: "Mt. Vernon (At Ace)",
                        TRIPID: "5343614",
                        VEHICLE: "1684"
                    },
                    {
                        ADHERENCE: "0",
                        BLOCKID: "615",
                        BLOCK_ABBR: "95-2",
                        DIRECTION: "Southbound",
                        LATITUDE: "33.7349091",
                        LONGITUDE: "-84.4131811",
                        MSGTIME: "10/29/2016 2:25:11 PM",
                        ROUTE: "95",
                        STOPID: "114900",
                        TIMEPOINT: "West End Station",
                        TRIPID: "5337007",
                        VEHICLE: "2339"
                    },
                    {
                        ADHERENCE: "-4",
                        BLOCKID: "264",
                        BLOCK_ABBR: "189-2",
                        DIRECTION: "Northbound",
                        LATITUDE: "33.6164952",
                        LONGITUDE: "-84.4727595",
                        MSGTIME: "10/29/2016 2:25:19 PM",
                        ROUTE: "189",
                        STOPID: "211077",
                        TIMEPOINT: "Godby & Old National",
                        TRIPID: "5341690",
                        VEHICLE: "2511"
                    },
                    {
                        ADHERENCE: "0",
                        BLOCKID: "136",
                        BLOCK_ABBR: "123-1",
                        DIRECTION: "Southbound",
                        LATITUDE: "33.7746303",
                        LONGITUDE: "-84.2971983",
                        MSGTIME: "10/29/2016 2:25:19 PM",
                        ROUTE: "123",
                        STOPID: "904262",
                        TIMEPOINT: "Decatur Station",
                        TRIPID: "5309325",
                        VEHICLE: "1636"
                    },
                    {
                        ADHERENCE: "-1",
                        BLOCKID: "387",
                        BLOCK_ABBR: "37-1",
                        DIRECTION: "Southbound",
                        LATITUDE: "33.7911999",
                        LONGITUDE: "-84.3983476",
                        MSGTIME: "10/29/2016 2:25:19 PM",
                        ROUTE: "37",
                        STOPID: "900844",
                        TIMEPOINT: "Atlantic Drive @ 17th Street",
                        TRIPID: "5326331",
                        VEHICLE: "1563"
                    },
                    {
                        ADHERENCE: "0",
                        BLOCKID: "376",
                        BLOCK_ABBR: "34-2",
                        DIRECTION: "Northbound",
                        LATITUDE: "33.7638742",
                        LONGITUDE: "-84.3132042",
                        MSGTIME: "10/29/2016 2:25:25 PM",
                        ROUTE: "34",
                        STOPID: "904323",
                        TIMEPOINT: "East Lake Station",
                        TRIPID: "5326689",
                        VEHICLE: "1681"
                    },
                    {
                        ADHERENCE: "-4",
                        BLOCKID: "617",
                        BLOCK_ABBR: "95-4",
                        DIRECTION: "Southbound",
                        LATITUDE: "33.6941856",
                        LONGITUDE: "-84.4081421",
                        MSGTIME: "10/29/2016 2:25:27 PM",
                        ROUTE: "95",
                        STOPID: "148082",
                        TIMEPOINT: "Lakewood & Metropolitan Parkway",
                        TRIPID: "5337006",
                        VEHICLE: "2369"
                    },
                    {
                        ADHERENCE: "-1",
                        BLOCKID: "199",
                        BLOCK_ABBR: "155-1",
                        DIRECTION: "Southbound",
                        LATITUDE: "33.7079683",
                        LONGITUDE: "-84.3799473",
                        MSGTIME: "10/29/2016 2:25:30 PM",
                        ROUTE: "155",
                        STOPID: "139046",
                        TIMEPOINT: "Lakewood & Jonesboro",
                        TRIPID: "5343270",
                        VEHICLE: "2387"
                    },
                    {
                        ADHERENCE: "2",
                        BLOCKID: "83",
                        BLOCK_ABBR: "119-1",
                        DIRECTION: "Eastbound",
                        LATITUDE: "33.8010885",
                        LONGITUDE: "-84.195208",
                        MSGTIME: "10/29/2016 2:25:36 PM",
                        ROUTE: "121",
                        STOPID: "121011",
                        TIMEPOINT: "Memorial & N.Hairston",
                        TRIPID: "5322663",
                        VEHICLE: "1607"
                    },
                    {
                        ADHERENCE: "-3",
                        BLOCKID: "546",
                        BLOCK_ABBR: "83-2",
                        DIRECTION: "Westbound",
                        LATITUDE: "33.7062026",
                        LONGITUDE: "-84.4577602",
                        MSGTIME: "10/29/2016 2:25:36 PM",
                        ROUTE: "83",
                        STOPID: "122005",
                        TIMEPOINT: "Delowe Dr. & Campbellton Rd.",
                        TRIPID: "5316465",
                        VEHICLE: "2408"
                    },
                    {
                        ADHERENCE: "-3",
                        BLOCKID: "411",
                        BLOCK_ABBR: "47-1",
                        DIRECTION: "Northbound",
                        LATITUDE: "33.8441751",
                        LONGITUDE: "-84.3269828",
                        MSGTIME: "10/29/2016 2:25:40 PM",
                        ROUTE: "47",
                        STOPID: "905259",
                        TIMEPOINT: "Briarwood Rd. & Buford Hwy.",
                        TRIPID: "5321951",
                        VEHICLE: "1637"
                    },
                    {
                        ADHERENCE: "-2",
                        BLOCKID: "504",
                        BLOCK_ABBR: "74-2",
                        DIRECTION: "Westbound",
                        LATITUDE: "33.7056988",
                        LONGITUDE: "-84.29132",
                        MSGTIME: "10/29/2016 2:25:41 PM",
                        ROUTE: "74",
                        STOPID: "129244",
                        TIMEPOINT: "Battle Forest & Flat Shoals",
                        TRIPID: "5316421",
                        VEHICLE: "1623"
                    },
                    {
                        ADHERENCE: "-1",
                        BLOCKID: "432",
                        BLOCK_ABBR: "50-2",
                        DIRECTION: "Eastbound",
                        LATITUDE: "33.7764536",
                        LONGITUDE: "-84.4497019",
                        MSGTIME: "10/29/2016 2:25:43 PM",
                        ROUTE: "50",
                        STOPID: "905911",
                        TIMEPOINT: "DLHollow & Hollywood",
                        TRIPID: "5332494",
                        VEHICLE: "1566"
                    },
                    {
                        ADHERENCE: "3",
                        BLOCKID: "382",
                        BLOCK_ABBR: "36-1",
                        DIRECTION: "Eastbound",
                        LATITUDE: "33.7745454",
                        LONGITUDE: "-84.2981988",
                        MSGTIME: "10/29/2016 2:25:47 PM",
                        ROUTE: "36",
                        STOPID: "212946",
                        TIMEPOINT: "Decatur Station",
                        TRIPID: "5328257",
                        VEHICLE: "1482"
                    },
                    {
                        ADHERENCE: "-1",
                        BLOCKID: "530",
                        BLOCK_ABBR: "8-1",
                        DIRECTION: "Northbound",
                        LATITUDE: "33.7713887",
                        LONGITUDE: "-84.252635",
                        MSGTIME: "10/29/2016 2:25:47 PM",
                        ROUTE: "8",
                        STOPID: "900686",
                        TIMEPOINT: "Kensington Station",
                        TRIPID: "5344933",
                        VEHICLE: "1548"
                    },
                    {
                        ADHERENCE: "0",
                        BLOCKID: "318",
                        BLOCK_ABBR: "201-2",
                        DIRECTION: "Eastbound",
                        LATITUDE: "33.7542433",
                        LONGITUDE: "-84.4698368",
                        MSGTIME: "10/29/2016 2:25:48 PM",
                        ROUTE: "201",
                        STOPID: "901140",
                        TIMEPOINT: "Hamilton E. Holmes Station",
                        TRIPID: "5340795",
                        VEHICLE: "2552"
                    },
                    {
                        ADHERENCE: "-8",
                        BLOCKID: "184",
                        BLOCK_ABBR: "15-3",
                        DIRECTION: "Northbound",
                        LATITUDE: "33.6339063",
                        LONGITUDE: "-84.2911154",
                        MSGTIME: "10/29/2016 2:25:48 PM",
                        ROUTE: "15",
                        STOPID: "212193",
                        TIMEPOINT: "Anvilblock Rd @ Lunsford Dr",
                        TRIPID: "5321620",
                        VEHICLE: "1518"
                    },
                    {
                        ADHERENCE: "0",
                        BLOCKID: "146",
                        BLOCK_ABBR: "125-2",
                        DIRECTION: "Southbound",
                        LATITUDE: "33.7722616",
                        LONGITUDE: "-84.2516304",
                        MSGTIME: "10/29/2016 2:25:50 PM",
                        ROUTE: "125",
                        STOPID: "900686",
                        TIMEPOINT: "Kensington Station",
                        TRIPID: "5328248",
                        VEHICLE: "1675"
                    },
                    {
                        ADHERENCE: "0",
                        BLOCKID: "255",
                        BLOCK_ABBR: "186-3",
                        DIRECTION: "Westbound",
                        LATITUDE: "33.7148271",
                        LONGITUDE: "-84.2137422",
                        MSGTIME: "10/29/2016 2:25:52 PM",
                        ROUTE: "186",
                        STOPID: "211898",
                        TIMEPOINT: "Snapfinger Woods & Everst School",
                        TRIPID: "5321177",
                        VEHICLE: "1426"
                    },
                    {
                        ADHERENCE: "-5",
                        BLOCKID: "490",
                        BLOCK_ABBR: "71-6",
                        DIRECTION: "Westbound",
                        LATITUDE: "33.7216873",
                        LONGITUDE: "-84.4650871",
                        MSGTIME: "10/29/2016 2:25:52 PM",
                        ROUTE: "71",
                        STOPID: "900111",
                        TIMEPOINT: "Cascade & Beecher Rd.",
                        TRIPID: "5316408",
                        VEHICLE: "2550"
                    },
                    {
                        ADHERENCE: "0",
                        BLOCKID: "466",
                        BLOCK_ABBR: "60-1",
                        DIRECTION: "Southbound",
                        LATITUDE: "33.7542048",
                        LONGITUDE: "-84.4684815",
                        MSGTIME: "10/29/2016 2:25:54 PM",
                        ROUTE: "60",
                        STOPID: "903320",
                        TIMEPOINT: "Hamilton E. Holmes Station",
                        TRIPID: "5336636",
                        VEHICLE: "2530"
                    },
                    {
                        ADHERENCE: "0",
                        BLOCKID: "67",
                        BLOCK_ABBR: "117-1",
                        DIRECTION: "Southbound",
                        LATITUDE: "33.7015697",
                        LONGITUDE: "-84.1731655",
                        MSGTIME: "10/29/2016 2:25:59 PM",
                        ROUTE: "117",
                        STOPID: "210346",
                        TIMEPOINT: "GRTA Park & Ride",
                        TRIPID: "5346562",
                        VEHICLE: "1519"
                    },
                    {
                        ADHERENCE: "-11",
                        BLOCKID: "397",
                        BLOCK_ABBR: "39-4",
                        DIRECTION: "Northbound",
                        LATITUDE: "33.8865246",
                        LONGITUDE: "-84.2877367",
                        MSGTIME: "10/29/2016 2:26:00 PM",
                        ROUTE: "39",
                        STOPID: "905631",
                        TIMEPOINT: "Buford & Chamblee Tucker",
                        TRIPID: "5332230",
                        VEHICLE: "1713"
                    },
                    {
                        ADHERENCE: "-2",
                        BLOCKID: "272",
                        BLOCK_ABBR: "19-1",
                        DIRECTION: "Southbound",
                        LATITUDE: "33.8578313",
                        LONGITUDE: "-84.3118852",
                        MSGTIME: "10/29/2016 2:26:02 PM",
                        ROUTE: "19",
                        STOPID: "906198",
                        TIMEPOINT: "Clairmont & Buford",
                        TRIPID: "5321636",
                        VEHICLE: "1410"
                    },
                    {
                        ADHERENCE: "0",
                        BLOCKID: "326",
                        BLOCK_ABBR: "21-1",
                        DIRECTION: "Eastbound",
                        LATITUDE: "33.7723065",
                        LONGITUDE: "-84.252026",
                        MSGTIME: "10/29/2016 2:26:03 PM",
                        ROUTE: "21",
                        STOPID: "900686",
                        TIMEPOINT: "Kensington Station",
                        TRIPID: "5345858",
                        VEHICLE: "1420"
                    },
                    {
                        ADHERENCE: "0",
                        BLOCKID: "198",
                        BLOCK_ABBR: "153-1",
                        DIRECTION: "Southbound",
                        LATITUDE: "33.7542326",
                        LONGITUDE: "-84.4684504",
                        MSGTIME: "10/29/2016 2:26:03 PM",
                        ROUTE: "153",
                        STOPID: "903320",
                        TIMEPOINT: "Hamilton E. Holmes Station",
                        TRIPID: "5337604",
                        VEHICLE: "1580"
                    },
                    {
                        ADHERENCE: "2",
                        BLOCKID: "346",
                        BLOCK_ABBR: "25-2",
                        DIRECTION: "Southbound",
                        LATITUDE: "33.9304063",
                        LONGITUDE: "-84.2651959",
                        MSGTIME: "10/29/2016 2:26:05 PM",
                        ROUTE: "25",
                        STOPID: "905968",
                        TIMEPOINT: "Peachtree Ind. & Tilly Mill",
                        TRIPID: "5343429",
                        VEHICLE: "1627"
                    },
                    {
                        ADHERENCE: "-5",
                        BLOCKID: "34",
                        BLOCK_ABBR: "111-1",
                        DIRECTION: "Southbound",
                        LATITUDE: "33.7149387",
                        LONGITUDE: "-84.2144995",
                        MSGTIME: "10/29/2016 2:26:10 PM",
                        ROUTE: "111",
                        STOPID: "131096",
                        TIMEPOINT: "Snapfingerwoods Dr. @ Wesley Cha",
                        TRIPID: "5312861",
                        VEHICLE: "1682"
                    },
                    {
                        ADHERENCE: "-2",
                        BLOCKID: "527",
                        BLOCK_ABBR: "79-2",
                        DIRECTION: "Southbound",
                        LATITUDE: "33.7181944",
                        LONGITUDE: "-84.4247129",
                        MSGTIME: "10/29/2016 2:26:13 PM",
                        ROUTE: "79",
                        STOPID: "123900",
                        TIMEPOINT: "Oakland City Station",
                        TRIPID: "5344101",
                        VEHICLE: "2308"
                    },
                    {
                        ADHERENCE: "-2",
                        BLOCKID: "295",
                        BLOCK_ABBR: "195-2",
                        DIRECTION: "Westbound",
                        LATITUDE: "33.612032",
                        LONGITUDE: "-84.2976785",
                        MSGTIME: "10/29/2016 2:26:18 PM",
                        ROUTE: "195",
                        STOPID: "212446",
                        TIMEPOINT: "Forest Parkway @ GA-42",
                        TRIPID: "5309430",
                        VEHICLE: "1679"
                    },
                    {
                        ADHERENCE: "0",
                        BLOCKID: "366",
                        BLOCK_ABBR: "32-2",
                        DIRECTION: "Southbound",
                        LATITUDE: "33.6875435",
                        LONGITUDE: "-84.3107417",
                        MSGTIME: "10/29/2016 2:26:20 PM",
                        ROUTE: "32",
                        STOPID: "152020",
                        TIMEPOINT: "Bouldercrest Rd @ Clifton Church",
                        TRIPID: "5339668",
                        VEHICLE: "2407"
                    },
                    {
                        ADHERENCE: "0",
                        BLOCKID: "583",
                        BLOCK_ABBR: "87-1",
                        DIRECTION: "Southbound",
                        LATITUDE: "33.9216713",
                        LONGITUDE: "-84.3445546",
                        MSGTIME: "10/29/2016 2:26:21 PM",
                        ROUTE: "87",
                        STOPID: "903009",
                        TIMEPOINT: "Dunwoody Station",
                        TRIPID: "5326991",
                        VEHICLE: "2419"
                    },
                    {
                        ADHERENCE: "2",
                        BLOCKID: "267",
                        BLOCK_ABBR: "189-5",
                        DIRECTION: "Southbound",
                        LATITUDE: "33.5866359",
                        LONGITUDE: "-84.512786",
                        MSGTIME: "10/29/2016 2:26:25 PM",
                        ROUTE: "189",
                        STOPID: "183950",
                        TIMEPOINT: "South Fulton Park & Ride",
                        TRIPID: "5344427",
                        VEHICLE: "2535"
                    },
                    {
                        ADHERENCE: "-6",
                        BLOCKID: "389",
                        BLOCK_ABBR: "39-1",
                        DIRECTION: "Southbound",
                        LATITUDE: "33.8236151",
                        LONGITUDE: "-84.3694452",
                        MSGTIME: "10/29/2016 2:26:26 PM",
                        ROUTE: "39",
                        STOPID: "902145",
                        TIMEPOINT: "Lindbergh Station",
                        TRIPID: "5332231",
                        VEHICLE: "1704"
                    },
                    {
                        ADHERENCE: "0",
                        BLOCKID: "479",
                        BLOCK_ABBR: "68-1",
                        DIRECTION: "Westbound",
                        LATITUDE: "33.7566205",
                        LONGITUDE: "-84.4170547",
                        MSGTIME: "10/29/2016 2:26:27 PM",
                        ROUTE: "68",
                        STOPID: "904642",
                        TIMEPOINT: "Ashby Station",
                        TRIPID: "5312204",
                        VEHICLE: "2328"
                    },
                    {
                        ADHERENCE: "0",
                        BLOCKID: "528",
                        BLOCK_ABBR: "79-3",
                        DIRECTION: "Northbound",
                        LATITUDE: "33.7179015",
                        LONGITUDE: "-84.4262681",
                        MSGTIME: "10/29/2016 2:26:34 PM",
                        ROUTE: "79",
                        STOPID: "123900",
                        TIMEPOINT: "Oakland City Station",
                        TRIPID: "5309363",
                        VEHICLE: "2350"
                    },
                    {
                        ADHERENCE: "-9",
                        BLOCKID: "495",
                        BLOCK_ABBR: "73-2",
                        DIRECTION: "Southbound",
                        LATITUDE: "33.7453504",
                        LONGITUDE: "-84.5587102",
                        MSGTIME: "10/29/2016 2:26:36 PM",
                        ROUTE: "73",
                        STOPID: "901381",
                        TIMEPOINT: "Fulton Ind. & Cascade",
                        TRIPID: "5339903",
                        VEHICLE: "2541"
                    },
                    {
                        ADHERENCE: "-8",
                        BLOCKID: "603",
                        BLOCK_ABBR: "9-1",
                        DIRECTION: "Southbound",
                        LATITUDE: "33.7397276",
                        LONGITUDE: "-84.3449372",
                        MSGTIME: "10/29/2016 2:26:38 PM",
                        ROUTE: "9",
                        STOPID: "105474",
                        TIMEPOINT: "Flat Shoals & Glenwood",
                        TRIPID: "5312270",
                        VEHICLE: "1520"
                    },
                    {
                        ADHERENCE: "0",
                        BLOCKID: "25",
                        BLOCK_ABBR: "110-1",
                        DIRECTION: "Northbound",
                        LATITUDE: "33.8480816",
                        LONGITUDE: "-84.3668049",
                        MSGTIME: "10/29/2016 2:26:39 PM",
                        ROUTE: "110",
                        STOPID: "905890",
                        TIMEPOINT: "Buckhead Station",
                        TRIPID: "5312853",
                        VEHICLE: "2454"
                    },
                    {
                        ADHERENCE: "-3",
                        BLOCKID: "84",
                        BLOCK_ABBR: "119-2",
                        DIRECTION: "Eastbound",
                        LATITUDE: "33.7874057",
                        LONGITUDE: "-84.1955956",
                        MSGTIME: "10/29/2016 2:26:42 PM",
                        ROUTE: "119",
                        STOPID: "210074",
                        TIMEPOINT: "Hairston & Rockbridge",
                        TRIPID: "5327308",
                        VEHICLE: "1428"
                    },
                    {
                        ADHERENCE: "-4",
                        BLOCKID: "60",
                        BLOCK_ABBR: "116-3",
                        DIRECTION: "Eastbound",
                        LATITUDE: "33.7597699",
                        LONGITUDE: "-84.1766697",
                        MSGTIME: "10/29/2016 2:26:43 PM",
                        ROUTE: "116",
                        STOPID: "903453",
                        TIMEPOINT: "Martin Rd. & Redan Rd.",
                        TRIPID: "5322640",
                        VEHICLE: "1621"
                    },
                    {
                        ADHERENCE: "0",
                        BLOCKID: "226",
                        BLOCK_ABBR: "172-2",
                        DIRECTION: "Northbound",
                        LATITUDE: "33.7175335",
                        LONGITUDE: "-84.426235",
                        MSGTIME: "10/29/2016 2:26:43 PM",
                        ROUTE: "172",
                        STOPID: "123900",
                        TIMEPOINT: "Oakland City Station",
                        TRIPID: "5327992",
                        VEHICLE: "2342"
                    },
                    {
                        ADHERENCE: "-2",
                        BLOCKID: "306",
                        BLOCK_ABBR: "2-2",
                        DIRECTION: "Eastbound",
                        LATITUDE: "33.7738611",
                        LONGITUDE: "-84.3558759",
                        MSGTIME: "10/29/2016 2:26:46 PM",
                        ROUTE: "2",
                        STOPID: "904530",
                        TIMEPOINT: "Highland & Ponce de Leon",
                        TRIPID: "5315889",
                        VEHICLE: "1436"
                    },
                    {
                        ADHERENCE: "-11",
                        BLOCKID: "540",
                        BLOCK_ABBR: "82-3",
                        DIRECTION: "Eastbound",
                        LATITUDE: "33.6564154",
                        LONGITUDE: "-84.5029692",
                        MSGTIME: "10/29/2016 2:26:46 PM",
                        ROUTE: "82",
                        STOPID: "211241",
                        TIMEPOINT: "Camp Creek Mkt. Pl.",
                        TRIPID: "5332831",
                        VEHICLE: "2304"
                    },
                    {
                        ADHERENCE: "-1",
                        BLOCKID: "521",
                        BLOCK_ABBR: "78-3",
                        DIRECTION: "Westbound",
                        LATITUDE: "33.6809708",
                        LONGITUDE: "-84.3835004",
                        MSGTIME: "10/29/2016 2:26:47 PM",
                        ROUTE: "78",
                        STOPID: "159128",
                        TIMEPOINT: "Browns Mill & Cleveland",
                        TRIPID: "5326942",
                        VEHICLE: "2216"
                    }
                ];
                return buses;
            };

            this.listBusByStation = function (stationName, busList) {
                var stationFilteredBuses = _.filter(busList, function (object) {
                    if (_.includes(_.lowerCase(object.TIMEPOINT), stationName)) {
                        return object;
                    }
                });

                return stationFilteredBuses;
            };

        })

        .factory('Arrivals', function ArrivalService($http, stationLocations) {
            var events = ['arrivalsChanged', 'apiError'];
            var subscribers = {
                arrivalsChanged: [],
                apiError: []
            };
            var _arrivals = [];
            var _req = null;
            var timer;

            var loadArrivals = function () {
                clearInterval(timer);
                var req = $http.get("http://marta-api.herokuapp.com/arrivals?" + (new Date()).getTime());
                _req = req.then(function (resp) {
                    _arrivals = resp.data;
                    for (var i = 0; i < subscribers.arrivalsChanged.length; i++) {
                        subscribers.arrivalsChanged[i].$emit('arrivalsChanged', _arrivals);
                    }
                }, function (resp) {
                    for (var i = 0; i < subscribers.arrivalsChanged.length; i++) {
                        subscribers.apiError[i].$emit('apiError', resp);
                    }
                }).finally(function () {
                    timer = setTimeout(loadArrivals, 10.5 * 1000);
                });
                return req;
            };
            loadArrivals();

            return {
                refresh: loadArrivals,
                subscribe: function (eventName, scope) {
                    if (events.indexOf(eventName) == -1) {
                        throw "Arrivals: Woops. '" + eventName + "' is not a valid subscription event.";
                    }

                    subscribers[eventName].push(scope);
                    scope.$on('$destroy', function () {
                        var subs = subscribers[eventName];
                        subs.splice(subs.indexOf(scope), 1);
                    });
                },
                all: function () {
                    return _arrivals;
                },
                by: function (attr, value) {
                    var res = [];
                    for (var i = 0; i < _arrivals.length; i++) {
                        if (_arrivals[i][attr] == value) {
                            res.push(_arrivals[i]);
                        }
                    }
                    return res;
                },

                // for use on dashboard, showing next arrivals
                latestByStation: function () {
                    var res = {};
                    var sortedArrivals = _arrivals.slice().sort(function (a, b) {
                        if (a.station == b.station) {
                            return a.waiting_seconds < b.waiting_seconds ? -1 : 1;
                        }
                        return a.station < b.station ? -1 : 1;
                    });

                    for (var i = 0; i < sortedArrivals.length; i++) {
                        // don't need station on the end of all these names
                        var station = sortedArrivals[i].station.replace(/ station$/, '');
                        var dir = sortedArrivals[i].direction;
                        if (!res[station]) {
                            res[station] = {};
                        }
                        if (!res[station][dir]) {
                            res[station][dir] = sortedArrivals[i];
                        }
                    }
                    return res;
                },

                closestTo: function (coords, arrivalsByStation) {
                    if (!arrivalsByStation)
                        return null;
                    var closestThree = nearestStations(coords);
                    var atLeastOne = null;
                    var results = {};
                    for (var i = 0; i < closestThree.length; i++) {
                        var stationName = closestThree[i].replace(/ station$/, '');
                        var result = arrivalsByStation[stationName];
                        if (result) {
                            atLeastOne = true;
                            results[stationName] = result;
                        }
                    }
                    // return null if the object is empty
                    return atLeastOne && results;
                }
            };

            function nearestStations(coords, num) {
                if (!num)
                    num = 3;
                var dists = [], closest = [];
                for (var station in stationLocations) {
                    var curr = stationLocations[station];
                    var lat = Math.pow(coords.latitude - curr.latitude, 2);
                    var lng = Math.pow(coords.longitude - curr.longitude, 2);
                    var dist = Math.sqrt(lat + lng);
                    for (var i = 0; i < 3; i++) {
                        if (!dists[i] || (dists[i] > dist)) {
                            if (dists.length == 3) {
                                closest.pop();
                                dists.pop();
                            }
                            closest.splice(i, 0, station);
                            dists.splice(i, 0, dist);
                            break;
                        }
                    }
                }
                return closest;
            }
        })

        .factory('MioLocation', function ($ionicPlatform, $q) {
            return {
                locate: function () {
                    return readiedLocation().then(function (position) {
                        var coords = {
                            latitude: position.coords.latitude,
                            longitude: position.coords.longitude
                        };
                        var newJson = JSON.stringify(coords);
                        var oldJson = localStorage.getItem('position2');
                        if (newJson != oldJson) {
                            localStorage.setItem('position2', newJson);
                        }
                        return coords;
                    });
                }
            }

            function readiedLocation() {
                return $q(function (resolve, reject) {
                    $ionicPlatform.ready(function () {
                        window.navigator.geolocation.getCurrentPosition(resolve, reject);
                    });
                });
            }
        })

        .factory('MioFavs', function () {
            var key = 'martaio-favorites';
            return {
                all: function () {
                    return favs();
                },
                toggle: function (station) {
                    var saved = favs();
                    var removeIndex = saved.indexOf(station);
                    if (removeIndex == -1) {
                        saved.push(station);
                    } else {
                        saved.splice(removeIndex, 1);
                    }
                    favsSave(saved);
                    return saved;
                },
                intersection: function (arrivals) {
                    var favs = this.all();
                    var ret = {};
                    var haveOne = false;
                    for (var i = 0; i < favs.length; i++) {
                        var fav = favs[i];
                        if (arrivals[fav]) {
                            haveOne = true;
                            ret[fav] = arrivals[fav];
                        }
                    }
                    if (haveOne) {
                        return ret;
                    } else {
                        return null;
                    }
                }
            }

            function favs() {
                return JSON.parse(localStorage.getItem(key) || '[]');
            }
            function favsSave(favs) {
                return localStorage.setItem(key, JSON.stringify(favs));
            }
        })

        .constant('stationLocations', {
            'bankhead station': {
                latitude: 33.772979,
                longitude: -84.428537
            },
            'midtown station': {
                latitude: 33.780737,
                longitude: -84.386657
            },
            'indian creek station': {
                latitude: 33.769212,
                longitude: -84.229255
            },
            'garnett station': {
                latitude: 33.748938,
                longitude: -84.395513
            },
            'college park station': {
                latitude: 33.6513813,
                longitude: -84.4470162
            },
            'ashby station': {
                latitude: 33.756289,
                longitude: -84.41755599999999
            },
            'five points station': {
                latitude: 33.754061,
                longitude: -84.391539
            },
            'airport station': {
                latitude: 33.639975,
                longitude: -84.44403199999999
            },
            'sandy springs station': {
                latitude: 33.9321044,
                longitude: -84.3513524
            },
            'lindbergh station': {
                latitude: 33.823698,
                longitude: -84.369248
            },
            'lakewood station': {
                latitude: 33.700649,
                longitude: -84.429541
            },
            'chamblee station': {
                latitude: 33.8879695,
                longitude: -84.30468049999999
            },
            'king memorial station': {
                latitude: 33.749468,
                longitude: -84.37601099999999
            },
            'east lake station': {
                latitude: 33.765062,
                longitude: -84.31261099999999
            },
            'vine city station': {
                latitude: 33.756612,
                longitude: -84.404348
            },
            'buckhead station': {
                latitude: 33.847874,
                longitude: -84.367296
            },
            'lenox station': {
                latitude: 33.845137,
                longitude: -84.357854
            },
            'civic center station': {
                latitude: 33.766245,
                longitude: -84.38750399999999
            },
            'arts center station': {
                latitude: 33.789283,
                longitude: -84.387125
            },
            'west end station': {
                latitude: 33.73584,
                longitude: -84.412967
            },
            'dunwoody station': {
                latitude: 33.9486029,
                longitude: -84.355848
            },
            'omni dome station': {
                latitude: 33.7489954,
                longitude: -84.3879824
            },
            'oakland city station': {
                latitude: 33.71726400000001,
                longitude: -84.42527899999999
            },
            'east point station': {
                latitude: 33.676609,
                longitude: -84.440595
            },
            'doraville station': {
                latitude: 33.9026881,
                longitude: -84.28025099999999
            },
            'brookhaven station': {
                latitude: 33.859928,
                longitude: -84.33922
            },
            'decatur station': {
                latitude: 33.774455,
                longitude: -84.297131
            },
            'medical center station': {
                latitude: 33.9106263,
                longitude: -84.3513751
            },
            'georgia state station': {
                latitude: 33.749732,
                longitude: -84.38569700000001
            },
            'avondale station': {
                latitude: 33.77533,
                longitude: -84.280715
            },
            'inman park station': {
                latitude: 33.757317,
                longitude: -84.35262
            },
            'kensington station': {
                latitude: 33.772093,
                longitude: -84.252217
            },
            'edgewood candler park station': {
                latitude: 33.761812,
                longitude: -84.340064
            },
            'peachtree center station': {
                latitude: 33.759532,
                longitude: -84.387564
            },
            'north ave station': {
                latitude: 33.771696,
                longitude: -84.387411
            }
        });
