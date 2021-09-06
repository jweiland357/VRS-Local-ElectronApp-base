/**
 * @fileoverview Robot blocks related to distance sensors.
 * @author austinshalit@gmail.com (Austin Shalit)
 */

// The following are generated dynamically in HardwareUtil.fetchJavaScriptForHardware():
// createDistanceSensorDropdown
// The following are defined in vars.js:
// propertyColorSensors

//VRS-When ready add this set of code to wrapper (also other methods)
/*
      //Distance Sensor Blocks
      var distSensor = interpreter.nativeToPseudo({});
      interpreter.setProperty(globalObject, 'distanceSensor', distSensor);
*/

//VRS-Added createDistanceSensorDropdown
function createDistanceSensorDropdown() {
  var CHOICES = [
	['frontDistSensor', 'distanceSensor0'],
  ];
  return new Blockly.FieldDropdown(CHOICES);
}

Blockly.Blocks['distanceSensor_getDistance'] = {
  init: function() {
    this.setOutput(true, 'Number');
    this.appendDummyInput()
        .appendField('call')
        .appendField(createDistanceSensorDropdown(), 'IDENTIFIER')
        .appendField('.')
        .appendField(createNonEditableField('getDistance'));
    this.appendValueInput('DISTANCE_UNIT').setCheck('DistanceUnit')
        .appendField('distanceUnit')
        .setAlign(Blockly.ALIGN_RIGHT);
    this.setColour(propertyColorSensors);
    this.setTooltip('Get the distance reported by the sensor in the provided unit.');
  }
};

Blockly.JavaScript['distanceSensor_getDistance'] = function(block) {
  var identifier = block.getFieldValue('IDENTIFIER');
  var distanceUnit = Blockly.JavaScript.valueToCode(
      block, 'DISTANCE_UNIT', Blockly.JavaScript.ORDER_NONE);
  var code = 'distanceSensor.getDistance(' + identifier.substring(identifier.length - 1) + ', ' + distanceUnit + ')';
  return [code, Blockly.JavaScript.ORDER_FUNCTION_CALL];
};

/*Blockly.FtcJava['distanceSensor_getDistance'] = function(block) {
  var identifier = Blockly.FtcJava.importDeclareAssign_(block, 'IDENTIFIER', 'DistanceSensor');
  var distanceUnit = Blockly.FtcJava.valueToCode(
      block, 'DISTANCE_UNIT', Blockly.FtcJava.ORDER_NONE);
  var code = identifier + '.getDistance(' + distanceUnit + ')';
  return [code, Blockly.FtcJava.ORDER_FUNCTION_CALL];
};*/
