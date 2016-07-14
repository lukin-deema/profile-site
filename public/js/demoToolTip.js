/// tooltip instances
var text = $("input[name='tooltip-text']:checked")[0].value;
var defaultTemplateText = new SimpleToolTip({
	hookElem:$("#template-text").get(0),
	toolTipText:text,
	containerIdName:"c-template-text",
	templateType:"text"
})
var defaultTemplateButtonync = new SimpleToolTip({
	hookElem:$("#template-buttonync").get(0),
	toolTipText:text,
	containerIdName:"c-template-buttonync",
	templateType:"buttonsYNC"
})
var defaultTemplateButtonyc = new SimpleToolTip({
	hookElem:$("#template-buttonyc").get(0),
	toolTipText:text,
	containerIdName:"c-template-buttonyc",
	templateType:"buttonsYC"
})
var defaultTemplateButtonic = new SimpleToolTip({
	hookElem:$("#template-buttoniyc").get(0),
	toolTipText:text,
	containerIdName:"c-template-buttoniyc",
	templateType:"buttonsIYC"
})
var resultTooltip = new SimpleToolTip({
	hookElem:$("#result").get(0),
	toolTipText:$("#static-text")[0].value,
	containerIdName:"template-result",
	template:$("#apply-tooltip-template").value
})
var templateHelp = new SimpleToolTip({
	hookElem:$("#template-help").get(0),
	toolTipText:"%data% output text <br>%buttonY% button Yes<br> %buttonN% button No<br> %buttonC% button Cancel<br> %inputBox% Input type text<br>",
	template: "%data% %buttonY%"
})
/// set functions
$("#apply-tooltip-text").on('click', applyTooltipText);
$("#apply-tooltip-template").on('click', applyTooltipTemplate);
/// functions
function applyTooltipText(){
	var tooltipText, hookAttr;
	var val = $("input[name='tooltip-text']:checked")[0].value;
	if (val=="static") {
		tooltipText = $("#static-text")[0].value;
		hookAttr = undefined
	} else if(val =="inner"){
		tooltipText = undefined;
		hookAttr = "innerHTML"
	} else if(val=="id"){
		tooltipText = undefined;
		hookAttr = "id"
	}
	applyDefault(defaultTemplateText,tooltipText,hookAttr)
	applyDefault(defaultTemplateButtonync,tooltipText,hookAttr)
	applyDefault(defaultTemplateButtonyc,tooltipText,hookAttr)
	applyDefault(defaultTemplateButtonic,tooltipText,hookAttr)
}
function applyDefault(tt, tooltipText, hookAttr) {
	tt.destroy();
	var opt = tt.optionsGet();
	opt.toolTipText = tooltipText;
	opt.hookAttr = hookAttr;
	tt.optionsSet(opt);
}

function applyTooltipTemplate(){
	resultTooltip.destroy();
	var opt = resultTooltip.optionsGet();
	opt.template = $("#template")[0].value
	resultTooltip.optionsSet(opt);
}
// %buttonC%