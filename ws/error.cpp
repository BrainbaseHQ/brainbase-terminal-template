#include <iostream>
using namespace std;

int main() {
    int num1 = 10;
    int num2 = 20;
    int result;

    // Perform addition
    result = num1 + num2;
    cout << "The sum is: " << result << endl;

    // Perform subtraction
    result = num1 - num2;
    cout << "The difference is: " << result << endl;

    // Perform multiplication
    result = num1 * num2;
    cout << "The product is: " << result << endl;

    // Perform division
    if (num2 != 0) {
        result = num1 / num2;
        cout << "The quotient is: " << result << endl;
    } else {
        cout << "Division by zero is not allowed." << endl;
    }

    // Intentional error: variable shadowing
    int shadowed_var = 100;
    {
        int shadowed_var = 200; // This line creates a subtle error
        cout << "Inside block, shadowed_var: " << shadowed_var << endl;
    }
    cout << "Outside block, shadowed_var: " << shadowed_var << endl;

    return 0;
}
