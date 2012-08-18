(function ($) {

    var Task = Wind.Async.Task;
    
    $.ajaxAsync = function (options) {
        return Task.create(function (t) {

            options.success = function (data, textStatus, jqXHR) {
                t.complete("success", {
                    data1: data,
                    textStatus: textStatus,
                    jqXHR: jqXHR
                });
            }

            options.error = function (jqXHR, textStatus, errorThrow) {
                t.complete("failure", {
                    jqXHR: jqXHR,
                    textStatus: textStatus,
                    errorThrow: errorThrow
                });
            };

            $.ajax(options);
        });
    };
    
    $.fn.readyAsync = function () {
        var _this = this;
        return Task.create(function (t) {
            _this.ready(function () {
                t.complete("success");
            });
        });
    }
    
    if ($.fn.dialog) {
        $.fn.dialogAsync = function (options) {
            var _this = this;

            return Task.create(function (t) {

                options.close = function () {
                    t.complete("success");
                }

                _this.dialog(options);
            });
        }
    }
	
	//phonegap异步调用插件
	$.cordovaAsync = function (serviceName, actionName, params) {
		return Task.create(function (t) {

            var success = function (result) {
                t.complete("success", result);
            };
			
			var fail = function(result) {
				t.complete("failure", result);
			}
            Cordova.exec(success, fail, serviceName, actionName, params);
        });
	}

})(jQuery);
