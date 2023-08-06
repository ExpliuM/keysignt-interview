cmake_minimum_required(VERSION 3.25)


project(CodingChallenge VERSION 1.0 LANGUAGES C)

if (CMAKE_HOST_SYSTEM_NAME MATCHES "Darwin")
    execute_process(
        COMMAND brew --prefix bison
        RESULT_VARIABLE BREW_BISON
        OUTPUT_VARIABLE BREW_BISON_PREFIX
        OUTPUT_STRIP_TRAILING_WHITESPACE
    )
    if (BREW_BISON EQUAL 0 AND EXISTS "${BREW_BISON_PREFIX}")
        message(STATUS "Found Bison keg installed by Homebrew at ${BREW_BISON_PREFIX}")
        set(BISON_EXECUTABLE "${BREW_BISON_PREFIX}/bin/bison")
    endif()

    execute_process(
        COMMAND brew --prefix flex
        RESULT_VARIABLE BREW_FLEX
        OUTPUT_VARIABLE BREW_FLEX_PREFIX
        OUTPUT_STRIP_TRAILING_WHITESPACE
    )
    if (BREW_FLEX EQUAL 0 AND EXISTS "${BREW_FLEX_PREFIX}")
        message(STATUS "Found Flex keg installed by Homebrew at ${BREW_FLEX_PREFIX}")
        set(FLEX_EXECUTABLE "${BREW_FLEX_PREFIX}/bin/flex")
    endif()
endif()


find_package(FLEX REQUIRED)
find_package(BISON REQUIRED)

FLEX_TARGET(LEXER "coding-challenge.l"  ${CMAKE_CURRENT_BINARY_DIR}/lexer.cpp)
BISON_TARGET(PARSER "coding-challenge.y" ${CMAKE_CURRENT_BINARY_DIR}/parser.cpp)

ADD_FLEX_BISON_DEPENDENCY(LEXER PARSER)

include_directories(${CMAKE_CURRENT_BINARY_DIR})
add_executable(CodingChallenge ${BISON_PARSER_OUTPUTS} ${FLEX_LEXER_OUTPUTS})
target_link_libraries(CodingChallenge ${FLEX_LIBRARIES})

# Tests
project(tests)
enable_language(C CXX)

# enable_testing()
find_package(GTest REQUIRED)

# GoogleTest requires at least C++14
set(CMAKE_CXX_STANDARD 17)

file(GLOB_RECURSE TEST_FILES "*.cc")
list(FILTER TEST_FILES EXCLUDE REGEX "(build|\.history)")

# For Windows: Prevent overriding the parent project's compiler/linker settings
set(gtest_force_shared_crt ON CACHE BOOL "" FORCE)

enable_testing()

add_executable(tests ${TEST_FILES})
target_link_libraries(tests GTest::gtest_main)

include(GoogleTest)
gtest_discover_tests(tests)