
/*
 * Link: https://www.hackerrank.com/challenges/c-tutorial-basic-data-types/problem?isFullScreen=true
 */
#include <filesystem>
#include <fstream>
#include <gtest/gtest.h>
#include <regex>

using namespace std;

TEST(regex_rules, import_regex_rule)
{
    const regex importRegEx("import");
    cmatch m;
    EXPECT_TRUE(regex_match("import", m, importRegEx));
    EXPECT_EQ(m.size(), 1);
    EXPECT_EQ(m[0], "import");

    EXPECT_FALSE(regex_match("impor", m, importRegEx));
    EXPECT_EQ(m.size(), 0);

    EXPECT_FALSE(regex_match("importt", m, importRegEx));
    EXPECT_EQ(m.size(), 0);
}

TEST(code_files, code_files)
{
    string path = "../tests";
    for (const auto &entry : filesystem::directory_iterator(path))
    {
        const string fileName = entry.path();

        if (entry.is_regular_file() && fileName.substr(fileName.find_last_of(".") + 1) == "in")
        {
            string testNumber = entry.path().stem();
            cout << "testNumber" << testNumber;

            string pathToInputFile = entry.path();

            stringstream pathToOutputFileSS;
            pathToOutputFileSS << "../tests/" << testNumber << ".out";
            string pathToOutputFile = pathToOutputFileSS.str();

            stringstream commandSS;
            commandSS << "./../coding-challenge"
                      << " <" << pathToInputFile << " >" << pathToOutputFile << " 2>&1";
            string command = commandSS.str();
            system(command.c_str());

            stringstream pathToExpectedFileSS;
            pathToExpectedFileSS << "../tests/" << testNumber << ".res";
            string pathToExpectedFile = pathToExpectedFileSS.str();

            ifstream expectedIFS(pathToExpectedFile);
            string expectedContent((istreambuf_iterator<char>(expectedIFS)),
                                   (istreambuf_iterator<char>()));

            ifstream resultIFS(pathToOutputFile);
            string resultContent((istreambuf_iterator<char>(resultIFS)),
                                 (istreambuf_iterator<char>()));

            ASSERT_EQ(expectedContent, resultContent) << endl
                                                      << "pathToOutputFile=" << pathToOutputFile << endl
                                                      << "pathToExpectedFile=" << pathToExpectedFile << endl
                                                      << "testNumber=" << testNumber;
        }
    }
}
