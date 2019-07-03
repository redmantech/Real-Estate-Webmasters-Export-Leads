Real-Estate-Webmasters-Export-Leads
===========

Easily Export your REW Leads, Save Searches, Groups, Favorites in an easy to use format to migrate to other Real Estate Website Providers. Like Redman, Brivity, or Blueroof.


Install:
--------

    git clone https://github.com/redmantech/Real-Estate-Webmasters-Export-Leads.git
    cd Real-Estate-Webmasters-Export-Leads
    npm i

Usage
-----

  1. Download from REW your csv with your leads. It will create a file called Leads_2019-06-25-1440.csv as an example
  2. From the REW backend interface, obtain a crm api key. This will be used as the 'password' in the next section
  3. Run the rew-sucker


    rew-export Leads_2019-06-25-1440.csv --site=www.myrewsite.com --username=crm  --password=aaaaaaaaaaaa647bb3d88a52aaaaaaaaaac7cfaaaaaaaaaa579c77b879a633baa > output.ndjson

The file output.ndjson will be created. Each line of the file is a valid json object with all information about a lead. This will include saved searches and favorite listings.
