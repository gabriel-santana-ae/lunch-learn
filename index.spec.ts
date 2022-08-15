// import { sumEvenNumByTwo } from ".";
import { MathOperations } from ".";

/**
 * @TestTemplate
 * I follow this template, and then after I refactor it removing all unnecessary information.
 */
it('Name of the test', () => {
    // Given - Setup of the test, what it needs to work
    
    // When - Here is where we trigger what we are testing to see if the code is behaving the way we want it.
    
    // Then - What should happen, the assertion
});

/**
 * @MakeSut - @FirstExample and @SecondExample
 * How I usually use the makeSut
 */
// const makeSut = () => ({ sut: sumEvenNumByTwo });

/**
 * @MakeSut - @ThirdExample
 * When we deal with different instances, and when naming SUT makes it easier to know what we're testing specifically
 */
const makeSut = () => {
    const math = new MathOperations();

    return {
        sut: math.sumEvenNumByTwo,
        subtractByTwo: math.subtractByTwo
    }
}

/**
 * @Tests
 */
// Before
it('should add an even number before refactor', () => {
    // Given
    const { sut } = makeSut();
    const input = 4;

    // When
    const result = sut(input);

    // Then
    expect(result).toEqual([6]);
});

// After
it('should add an even number after refactor', () => {
    const { sut } = makeSut();
    expect(sut(4)).toEqual([6]);
});

it('should not add an odd number', () => {
    const { sut } = makeSut();

    expect(
        () => sut([5])
    ).toThrowError();
});

it('should add an array of even numbers', () => {
    const { sut }= makeSut();
    const input = [ 2, 4, 6, 8, 10 ];
    
    expect(sut(input)).toEqual([ 4, 6, 8, 10, 12 ]);
});
