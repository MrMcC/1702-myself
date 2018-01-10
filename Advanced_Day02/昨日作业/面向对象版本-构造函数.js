/**
 * Created by lzc on 2017/4/5.
 */
/*
 作者：李振超    2017年4月5日 09:20
 使用构造函数

 */
function ThreeLevelChange(proSelect, citySelect, countySelect){
    this.proSelect = proSelect;
    this.citySelect = citySelect;
    this.countySelect = countySelect;
    /*初始化的动作*/
    this.init = function (){
        var that = this;
        //添加所有的省份
        this._fillProvince();

        this.proSelect.onchange = function (){
            var ProID = that.proSelect.value;
            that._fillCity(ProID);
            //如果城市是自动变化的(通过代码改变的，则不会调用onchange)
            that.citySelect.onchange();
        }
        this.citySelect.onchange = function (){
            var CityID = that.citySelect.value;
            that._fillCounty(CityID);
        }

        //手动调用onchange方法
        this.proSelect.onchange();
    };
    /*填充省份*/
    this._fillProvince = function (){
        var proList = data.provinceList;
        for(var pro of proList){
            this._createOption(pro.ProID, pro.ProName, this.proSelect);
        }
    };
    /*填充城市*/
    this._fillCity = function (ProID){
        this.citySelect.innerHTML = "";
        var cityList = data.cityList;
        for(var city of cityList){
            if(city.ProID == ProID){
                this._createOption(city.CityID, city.CityName, this.citySelect);
            }
        }
    };
    /*填充县区*/
    this._fillCounty = function (CityID){
        this.countySelect.innerHTML = "";
        var countyList = data.countyList;
        for(var county of countyList){
            if(county.CityID == CityID){
                this._createOption(county.Id, county.DisName, this.countySelect);
            }
        }
    };

    /*创建option，并把创建的option添加的制定的select中*/
    this._createOption = function (value, text, select){
        var option = document.createElement("option");
        option.value = value;
        option.innerHTML = text;
        select.appendChild(option);
    }
}


var proSelect = document.getElementById("province");
var citySelect = document.getElementById("city");
var countySelect = document.getElementById("county");
var tlc = new ThreeLevelChange(proSelect, citySelect, countySelect);
tlc.init();