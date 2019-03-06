class Calculator

  def add(a, b)
    a.send(:+, b)
  end

  def factorial(n)
    if n == 0
     return 1
   end
   #     n * factorial(n-1)
   # end

   (1..n).to_a.inject do |total, num|
    total * num
   end
  end

end
