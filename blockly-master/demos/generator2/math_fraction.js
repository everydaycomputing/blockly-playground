Blockly.JavaScript['math_fraction'] = function(block) {
  var number_numerator = block.getFieldValue('numerator');
  var value_numerator = Blockly.JavaScript.valueToCode(block, 'numerator', Blockly.JavaScript.ORDER_ATOMIC);
  var number_denominator = block.getFieldValue('denominator');
  var value_denominator = Blockly.JavaScript.valueToCode(block, 'denominator', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = '...;\n';
  return code;
};
