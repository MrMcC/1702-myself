window.onload = function (){
    //表示三级联动的对象
    var threeLevelChange = {
        //表示省份、城市、县区的select  作为属性
        proSelect: document.getElementById("province"),
        citySelect: document.getElementById("city"),
        countySelect: document.getElementById("county"),
        //初始化相关动作
        init: function (){
            var self = this;
            this.proSelect.onchange = function (){
                var ProID = this.value;
                self.fillCity(ProID);
                self.citySelect.onchange();
            };
            this.citySelect.onchange = function (){
                var CityID = this.value;
                self.fillCounty(CityID)
            };
            this.fillProvince();
            this.proSelect.onchange();
        },
        fillProvince: function (){
            var proList = data.provinceList;
            for (pro of proList){
                this._createOption(pro.ProID, pro.ProName, this.proSelect);
            }
        },
        fillCity: function (ProID){
            this.citySelect.innerHTML = ""
            var cityList = data.cityList;
            for (var city of cityList){
                if (city.ProID == ProID){
                    this._createOption(city.CityID, city.CityName, this.citySelect);
                }
            }
        },
        fillCounty: function (CityID){
            this.countySelect.innerHTML = ""
            var countyList = data.countyList;
            for (var county of countyList){
                if (county.CityID == CityID){
                    this._createOption("", county.DisName, this.countySelect);
                }
            }
        },
        //如果属性名用_开头，约定表示是内部调用，不建议在外部调用
        _createOption: function (value, text, parent){
            var opt = document.createElement("option");
            opt.value = value;
            opt.innerHTML = text;
            parent.appendChild(opt);
        }
    };
    //初始化三级联动
    threeLevelChange.init();
}