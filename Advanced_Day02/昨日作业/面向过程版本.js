window.onload = function (){
    var proSelect = document.getElementById("province");
    var citySelect = document.getElementById("city");
    var countySelect = document.getElementById("county");

    //给省份的select添加onchange事件
    proSelect.onchange = function (){
        var ProID = this.value;
        fillCity(ProID); //填充指定省份的所有城市
        citySelect.onchange()   //手动触发citySelect的onchange事件
    };

    //给城市的select添加onchange事件
    citySelect.onchange = function (){
        var CityID = this.value;
        fillCounty(CityID)
    };

    //自动填充所有的省份，并手动触发省份的onchange事件
    (function (){
        fillProvince();
        proSelect.onchange()
    })();


    /*填充省份的select*/
    function fillProvince(){
        /*获取到所有的存储所有省份的数组，每一个省份也是一个对象*/
        var proList = data.provinceList;
        //遍历每个省份，然后填充到proSelect中
        for(pro of proList){
            createOption(pro.ProID, pro.ProName, proSelect);
        }
    }

    /*填充市的select:   参数：省份的id*/
    function fillCity(ProI){
        citySelect.innerHTML = ""
        /*所有的城市*/
        var cityList = data.cityList;
        for(var city of cityList){
            /*只处理指定省份的city*/
            if(city.ProID == ProI){
                createOption(city.CityID, city.CityName, citySelect);
            }
        }
    }
    /*填充县的select:   参数： 城市的id*/
    function fillCounty(CityId){
        countySelect.innerHTML = ""
        /*所有的城市*/
        var countyList = data.countyList;
        for(var county of countyList){
            /*只处理指定省份的city*/
            if(county.CityID == CityId){
                createOption("", county.DisName, countySelect);
            }
        }
    }

    //创建一个option并把这个option添加到指定的select中
    //参数1：option的value  参数2：option的text值 参数3：select对象
    function createOption(value, text, parent){
        var opt = document.createElement("option");
        opt.value = value;
        opt.innerHTML = text;
        parent.appendChild(opt);
    }
}