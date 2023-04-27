
<template lang="">
  <div>
    <button @click="testFunction()">Object</button>
  </div>
</template>
<script>
import { remove } from "../../network/requests";
import { authHeader } from "../../services/helper";
export default {
  methods: {
    testFunction: function() {
      var data = this.getData();
      console.log(this.mapClientList(data));
      // this.mapClientList(data);
    },
    mapClientList: function(array = []) {
      return array.map(item => {
        var client = item.client;
        client.scenarios = item.scenarios;
        client.reports = item.reports ? item.reports.reports_data : [];
        let report = item.scenarios.length
          ? item.scenarios.map(s => {
              let scenario_name = s.scenario_details.name;
              let scenario_id = s.scenario_details.id;
              s.reports.reports_data;
              if (s.reports.reports_data.length) {
                s.reports.reports_data = s.reports.reports_data.map(r => {
                  r.scenario_name = scenario_name;
                  r.scenario_id = scenario_id;
                  return r;
                });
              }
              return s.reports.reports_data;
            }) || []
          : [];
        report = report.filter(r => r.length)[0] || [];
        report = client.scenarios.filter(i => i.reports.reports_data.length);
        let all_reports = [];
        report.forEach(e => {
          all_reports = [...all_reports, ...e.reports.reports_data];
        });

        client.reports = all_reports;
        return client;
      });
    },
    getData: function() {
      return [
        {
          client: {
            id: 130,
            firstname: "Stuff",
            age: 60,
            lastname: "head",
            middlename: "in",
            created_at: "2023-01-31T18:46:02.885285Z",
            updated_at: "2023-01-31T18:46:02.885312Z",
            scenarios: [
              {
                id: 112,
                is_draft: false,
                created_at: "2023-03-16T14:50:37.789620Z",
                updated_at: "2023-03-16T14:50:37.789661Z",
                scenario_details: {
                  id: 366,
                  name: "Test scenario",
                  created_at: "2023-01-11T08:32:45.583016Z",
                  updated_at: "2023-01-11T08:32:45.583747Z",
                },
                reports: {
                  reports_data: [],
                },
              },
              {
                id: 168,
                is_draft: false,
                created_at: "2023-04-03T13:29:03.790476Z",
                updated_at: "2023-04-03T13:29:03.790506Z",
                scenario_details: {
                  id: 478,
                  name: "CSV Testing Scenario",
                  created_at: "2023-04-03T13:29:02.391277Z",
                  updated_at: "2023-04-03T13:29:02.391306Z",
                },
                reports: {
                  reports_data: [],
                },
              },
              {
                id: 163,
                is_draft: false,
                created_at: "2023-04-03T11:12:15.645224Z",
                updated_at: "2023-04-03T11:12:15.645249Z",
                scenario_details: {
                  id: 473,
                  name: "Test Scenario 03042023",
                  created_at: "2023-04-03T11:12:14.766898Z",
                  updated_at: "2023-04-03T11:12:14.766919Z",
                },
                reports: {
                  reports_data: [],
                },
              },
              {
                id: 191,
                is_draft: false,
                created_at: "2023-04-26T09:56:48.988148Z",
                updated_at: "2023-04-26T09:56:48.988176Z",
                scenario_details: {
                  id: 501,
                  name: "excel",
                  created_at: "2023-04-26T09:56:48.074176Z",
                  updated_at: "2023-04-26T09:56:48.074203Z",
                },
                reports: {
                  reports_data: [],
                },
              },
              {
                id: 174,
                is_draft: false,
                created_at: "2023-04-05T07:13:30.111056Z",
                updated_at: "2023-04-05T07:13:30.111084Z",
                scenario_details: {
                  id: 484,
                  name: "Test Scenario",
                  created_at: "2023-04-05T07:13:28.897756Z",
                  updated_at: "2023-04-05T07:13:28.897774Z",
                },
                reports: {
                  reports_data: [],
                },
              },
              {
                id: 184,
                is_draft: false,
                created_at: "2023-04-21T06:54:47.311457Z",
                updated_at: "2023-04-21T06:54:47.311483Z",
                scenario_details: {
                  id: 494,
                  name: "test-21-Apr",
                  created_at: "2023-04-21T06:54:46.828571Z",
                  updated_at: "2023-04-21T06:54:46.828592Z",
                },
                reports: {
                  reports_data: [],
                },
              },
              {
                id: 185,
                is_draft: false,
                created_at: "2023-04-21T06:56:21.133627Z",
                updated_at: "2023-04-21T06:56:21.133654Z",
                scenario_details: {
                  id: 495,
                  name: "test-21-apr",
                  created_at: "2023-04-21T06:56:20.635611Z",
                  updated_at: "2023-04-21T06:56:20.635639Z",
                },
                reports: {
                  reports_data: [
                    {
                      id: 1,
                      name: "report 1",
                      description: null,
                      created_at: "2023-02-09T11:29:29.458972Z",
                      updated_at: "2023-02-09T11:29:29.459001Z",
                    },
                  ],
                },
              },
            ],
            reports: [
              {
                id: 1,
                name: "report 1",
                description: null,
                created_at: "2023-02-09T11:29:29.458972Z",
                updated_at: "2023-02-09T11:29:29.459001Z",
              },
            ],
          },
          scenarios: [
            {
              id: 112,
              is_draft: false,
              created_at: "2023-03-16T14:50:37.789620Z",
              updated_at: "2023-03-16T14:50:37.789661Z",
              scenario_details: {
                id: 366,
                name: "Test scenario",
                created_at: "2023-01-11T08:32:45.583016Z",
                updated_at: "2023-01-11T08:32:45.583747Z",
              },
              reports: {
                reports_data: [],
              },
            },
            {
              id: 168,
              is_draft: false,
              created_at: "2023-04-03T13:29:03.790476Z",
              updated_at: "2023-04-03T13:29:03.790506Z",
              scenario_details: {
                id: 478,
                name: "CSV Testing Scenario",
                created_at: "2023-04-03T13:29:02.391277Z",
                updated_at: "2023-04-03T13:29:02.391306Z",
              },
              reports: {
                reports_data: [],
              },
            },
            {
              id: 163,
              is_draft: false,
              created_at: "2023-04-03T11:12:15.645224Z",
              updated_at: "2023-04-03T11:12:15.645249Z",
              scenario_details: {
                id: 473,
                name: "Test Scenario 03042023",
                created_at: "2023-04-03T11:12:14.766898Z",
                updated_at: "2023-04-03T11:12:14.766919Z",
              },
              reports: {
                reports_data: [],
              },
            },
            {
              id: 191,
              is_draft: false,
              created_at: "2023-04-26T09:56:48.988148Z",
              updated_at: "2023-04-26T09:56:48.988176Z",
              scenario_details: {
                id: 501,
                name: "excel",
                created_at: "2023-04-26T09:56:48.074176Z",
                updated_at: "2023-04-26T09:56:48.074203Z",
              },
              reports: {
                reports_data: [],
              },
            },
            {
              id: 174,
              is_draft: false,
              created_at: "2023-04-05T07:13:30.111056Z",
              updated_at: "2023-04-05T07:13:30.111084Z",
              scenario_details: {
                id: 484,
                name: "Test Scenario",
                created_at: "2023-04-05T07:13:28.897756Z",
                updated_at: "2023-04-05T07:13:28.897774Z",
              },
              reports: {
                reports_data: [],
              },
            },
            {
              id: 184,
              is_draft: false,
              created_at: "2023-04-21T06:54:47.311457Z",
              updated_at: "2023-04-21T06:54:47.311483Z",
              scenario_details: {
                id: 494,
                name: "test-21-Apr",
                created_at: "2023-04-21T06:54:46.828571Z",
                updated_at: "2023-04-21T06:54:46.828592Z",
              },
              reports: {
                reports_data: [
                  {
                    id: 4,
                    name: "report 1",
                    description: null,
                    created_at: "2023-02-09T11:29:29.458972Z",
                    updated_at: "2023-02-09T11:29:29.459001Z",
                  },
                  {
                    id: 5,
                    name: "report 2",
                    description: null,
                    created_at: "2023-02-09T11:29:29.458972Z",
                    updated_at: "2023-02-09T11:29:29.459001Z",
                  },
                ],
              },
            },
            {
              id: 185,
              is_draft: false,
              created_at: "2023-04-21T06:56:21.133627Z",
              updated_at: "2023-04-21T06:56:21.133654Z",
              scenario_details: {
                id: 495,
                name: "test-21-apr",
                created_at: "2023-04-21T06:56:20.635611Z",
                updated_at: "2023-04-21T06:56:20.635639Z",
              },
              reports: {
                reports_data: [
                  {
                    id: 1,
                    name: "report 1",
                    description: null,
                    created_at: "2023-02-09T11:29:29.458972Z",
                    updated_at: "2023-02-09T11:29:29.459001Z",
                  },
                  {
                    id: 2,
                    name: "report 2",
                    description: null,
                    created_at: "2023-02-09T11:29:29.458972Z",
                    updated_at: "2023-02-09T11:29:29.459001Z",
                  },
                  {
                    id: 3,
                    name: "report 3",
                    description: null,
                    created_at: "2023-02-09T11:29:29.458972Z",
                    updated_at: "2023-02-09T11:29:29.459001Z",
                  },
                ],
              },
            },
          ],
          reports: {
            reports_data: [
              {
                id: 1,
                name: "report 1",
                description: null,
                created_at: "2023-02-09T11:29:29.458972Z",
                updated_at: "2023-02-09T11:29:29.459001Z",
              },
            ],
          },
        },
        {
          client: {
            id: 131,
            firstname: "test3",
            age: 30,
            lastname: "test56",
            middlename: null,
            created_at: "2023-02-02T11:54:25.778096Z",
            updated_at: "2023-02-02T11:54:25.778130Z",
            scenarios: [
              {
                id: 107,
                is_draft: false,
                created_at: "2023-03-09T12:02:51.181086Z",
                updated_at: "2023-03-09T12:02:51.181123Z",
                scenario_details: {
                  id: 361,
                  name: "Test Scenario",
                  created_at: "2023-01-11T05:03:05.718052Z",
                  updated_at: "2023-01-11T05:03:05.718073Z",
                },
                reports: {
                  reports_data: [],
                },
              },
              {
                id: 157,
                is_draft: false,
                created_at: "2023-04-01T10:15:47.355652Z",
                updated_at: "2023-04-01T10:15:47.355675Z",
                scenario_details: {
                  id: 467,
                  name: "Test scenario",
                  created_at: "2023-04-01T10:15:46.425316Z",
                  updated_at: "2023-04-01T10:15:46.425334Z",
                },
                reports: {
                  reports_data: [],
                },
              },
              {
                id: 164,
                is_draft: false,
                created_at: "2023-04-03T12:09:55.425566Z",
                updated_at: "2023-04-03T12:09:55.425593Z",
                scenario_details: {
                  id: 474,
                  name: "Test scenario #1",
                  created_at: "2023-04-03T12:09:55.432857Z",
                  updated_at: "2023-04-03T12:09:55.432875Z",
                },
                reports: {
                  reports_data: [],
                },
              },
              {
                id: 182,
                is_draft: false,
                created_at: "2023-04-17T09:05:32.184727Z",
                updated_at: "2023-04-17T09:05:32.184752Z",
                scenario_details: {
                  id: 492,
                  name: "Test Scenario",
                  created_at: "2023-04-17T09:05:31.675225Z",
                  updated_at: "2023-04-17T09:05:31.675406Z",
                },
                reports: {
                  reports_data: [],
                },
              },
            ],
            reports: [],
          },
          scenarios: [],
          reports: {
            reports_data: [],
          },
        },
      ];
    },
  },
};
</script>