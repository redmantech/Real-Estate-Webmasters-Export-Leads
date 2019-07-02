REW-sucker
===========

Gets all client and lead information out of a REW website

Install:
--------

    git clone https://gitlab.rmcloud.com/npm-modules/rew-sucker
    cd rew-sucker
    npm i

Usage
-----

  1. Download from REW your csv with your leads. It will create a file called Leads_2019-06-25-1440.csv as an example
  2. From the REW backend interface, obtain a crm api key. This will be used as the 'password' in the next section
  3. Run the rew-sucker


    rew-sucker Leads_2019-06-25-1440.csv --site=www.myrewsite.com --username=crm  --password=aaaaaaaaaaaa647bb3d88a52aaaaaaaaaac7cfaaaaaaaaaa579c77b879a633baa > output.ndjson

The file output.ndjson will be created. Each line of the file is a valid json object with all information about a lead. This will include saved searches and favorite listings.
