require_relative '../calculator'
# require spec helper

describe Calculator do
  describe '#add' do
    it 'return the sum of two numbers!!!!!' do
      # - Setup
      calc = Calculator.new
      # - Execute/trigger
      first_sum = calc.add(3, 7)
      second_sum = calc.add(9, 5)
      # - Expectation (Verification)
      expect(first_sum).to eq(10)
      expect(second_sum).to eq(14)
      # - Teardown
    end

    it "works with negative numbers" do
      calc = Calculator.new

      # Execution/Trigger and Expectation/Verification together
      expect(calc.add(-1, 6)).to eq(5)
    end
  end

  describe '#factorial' do
    it 'returns 1 when given 0' do
      calc = Calculator.new

      result = calc.factorial(0)

      expect(result).to eq(1)
    end

    it 'takes a number and multiplies it by all numbers below it to 0' do
      # 5! = 5 * 4 * 3 * 2 * 1 * 0
      calc = Calculator.new

      result = calc.factorial(5)

      expect(result).to eq(120)
    end
  end
end
