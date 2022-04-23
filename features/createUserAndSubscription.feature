Feature: User and Subscription Creation

  Background:
    When I go to "https://viktor-silakov.github.io/course-sut/"
    And I login as: "walker@jw.com", "password"

  Scenario Outline: check user and subscription
    Then I go to "Create User" menu item
    And I fill user form "<email>","<password>","<address1>","<address2>","<city>","<zip>","<description>"
    Then I go to "List of users" menu item
    And I check user info on the line "<selector>"
    Then I go to "Create Subscription" menu item
    And I fill subscribtion form "<year>","<user>","<description2>"
    Then I go to "List of Subscriptions" menu item
    And I check subscribtion on the line "<selector2>"
    Then I logout 
     
    Examples:
    |email             | password    | address1          | address2 | city       | zip   | description | selector                                   | year | user            | description2 | selector2                             |
    |test1@test.com    | U&cmpYsxK9  | Rustaveli 20-22   | flor 1   | Tbilisi    |222567 | test user 1 | (//*[@id='users-table']/div[2]/div/div)[2] | 2020 | test1@test.com  | some text 1  | (//*[@id='table']/div[2]/div/div[1])  |
    |test2@test.com    | U&FGPYsxK9  | Rustaveli 20-25   | flor 5   | Tbilisi    |222666 | test user 2 | (//*[@id='users-table']/div[2]/div/div)[3] | 2021 | test2@test.com  | some text 2  | (//*[@id='table']/div[2]/div/div[2])  |
    |test3@test.com    | U&cmpEIPxK9 | Rustaveli 20-26   | flor 6   | Tbilisi    |111567 | test user 3 | (//*[@id='users-table']/div[2]/div/div)[4] | 2022 | test3@test.com  | some text 3  | (//*[@id='table']/div[2]/div/div[3])  |

    