export const staticIPCreated = [
  {
    network_yaml:
      '#generated by ui form view\ninterfaces:\n  - name: DUMMY4\n    type: ethernet\n    state: up\n    ipv4:\n      address:\n        - ip: 0.0.0.0\n          prefix-length: 24\n      enabled: true\n      dhcp: false\n',
    mac_interface_map: [
      {
        mac_address: '01:23:45:67:89:AB',
        logical_nic_name: 'DUMMY4',
      },
    ],
  },
];

export const staticIPNetworkConf = [
  {
    network_yaml:
      '#generated by ui form view\n#ipv4MachineNetwork 192.0.0.0/25\ninterfaces:\n  - name: DUMMY4\n    type: ethernet\n    state: up\n    ipv4:\n      address:\n        - ip: 0.0.0.0\n          prefix-length: 24\n      enabled: true\n      dhcp: false\ndns-resolver:\n  config:\n    server:\n      - 192.0.0.2\nroutes:\n  config:\n    - destination: 0.0.0.0/0\n      next-hop-address: 192.0.0.1\n      next-hop-interface: DUMMY4\n      table-id: 254\n',
    mac_interface_map: [
      {
        mac_address: '01:23:45:67:89:AB',
        logical_nic_name: 'DUMMY4',
      },
    ],
  },
];

export const staticIPHostConfig = [
  {
    network_yaml:
      '#generated by ui form view\n#ipv4MachineNetwork 192.0.0.0/25\ninterfaces:\n  - name: eth0\n    type: ethernet\n    state: up\n    ipv4:\n      address:\n        - ip: 192.0.0.10\n          prefix-length: 25\n      enabled: true\n      dhcp: false\ndns-resolver:\n  config:\n    server:\n      - 192.0.0.2\nroutes:\n  config:\n    - destination: 0.0.0.0/0\n      next-hop-address: 192.0.0.1\n      next-hop-interface: eth0\n      table-id: 254\n',
    mac_interface_map: [
      { mac_address: '00:00:5e:00:53:af', logical_nic_name: 'eth0' },
    ],
  },
];

export const staticIPHost2Config = [
  {
    network_yaml:
      '#generated by ui form view\n#ipv4MachineNetwork 192.0.0.0/25\ninterfaces:\n  - name: eth0\n    type: ethernet\n    state: up\n    ipv4:\n      address:\n        - ip: 192.0.0.10\n          prefix-length: 25\n      enabled: true\n      dhcp: false\ndns-resolver:\n  config:\n    server:\n      - 192.0.0.2\nroutes:\n  config:\n    - destination: 0.0.0.0/0\n      next-hop-address: 192.0.0.1\n      next-hop-interface: eth0\n      table-id: 254\n',
    mac_interface_map: [
      { mac_address: '00:00:5e:00:53:af', logical_nic_name: 'eth0' },
    ],
  },
  {
    network_yaml:
      '#generated by ui form view\n#ipv4MachineNetwork 192.0.0.0/25\ninterfaces:\n  - name: eth0\n    type: ethernet\n    state: up\n    ipv4:\n      address:\n        - ip: 192.0.0.11\n          prefix-length: 25\n      enabled: true\n      dhcp: false\ndns-resolver:\n  config:\n    server:\n      - 192.0.0.2\nroutes:\n  config:\n    - destination: 0.0.0.0/0\n      next-hop-address: 192.0.0.1\n      next-hop-interface: eth0\n      table-id: 254\n',
    mac_interface_map: [
      {
        mac_address: '00:00:5e:00:53:ae',
        logical_nic_name: 'eth0',
      },
    ],
  },
];

export const staticIPHostConfigYaml =  [
  {
    network_yaml: 'interfaces:\n  - name: eth0\n    type: ethernet\n    state: up\n    ipv4:\n      address:\n        - ip: 192.0.0.10\n          prefix-length: 24\n      enabled: true\n      dhcp: false\ndns-resolver:\n  config:\n    server:\n      - 192.0.0.1\nroutes:\n  config:\n    - destination: 0.0.0.0/0\n      next-hop-address: 192.0.0.2\n      next-hop-interface: eth0\n      table-id: 254\n',
    mac_interface_map: [
      { mac_address: '00:00:5e:00:53:af', logical_nic_name: 'host-1' },
    ],
  },
];

export const staticIPDualStack = [
  {
    network_yaml: "#generated by ui form view\n#ipv4MachineNetwork 192.0.0.0/25\n#ipv6MachineNetwork 1234:db8::/100\ninterfaces:\n  - name: eth0\n    type: ethernet\n    state: up\n    ipv4:\n      address:\n        - ip: 192.0.0.10\n          prefix-length: 25\n      enabled: true\n      dhcp: false\n  - name: DUMMY6\n    type: ethernet\n    state: up\n    ipv6:\n      address:\n        - ip: 0::0\n          prefix-length: 64\n      enabled: true\n      dhcp: false\ndns-resolver:\n  config:\n    server:\n      - 192.0.0.2\nroutes:\n  config:\n    - destination: 0.0.0.0/0\n      next-hop-address: 192.0.0.1\n      next-hop-interface: eth0\n      table-id: 254\n    - destination: '::/0'\n      next-hop-address: 1234:db8::ab\n      next-hop-interface: DUMMY6\n      table-id: 254\n",
    mac_interface_map: [
      {
        mac_address: "00:00:5e:00:53:af",
        logical_nic_name: "eth0"
      }
    ],
  },
];

export const staticIPHost2ConfigYaml = [
  {
    network_yaml: 'interfaces:\n  - name: eth0\n    type: ethernet\n    state: up\n    ipv4:\n      address:\n        - ip: 192.0.0.10\n          prefix-length: 24\n      enabled: true\n      dhcp: false\ndns-resolver:\n  config:\n    server:\n      - 192.0.0.1\nroutes:\n  config:\n    - destination: 0.0.0.0/0\n      next-hop-address: 192.0.0.2\n      next-hop-interface: eth0\n      table-id: 254\n',
    mac_interface_map: [
      { mac_address: '00:00:5e:00:53:af', logical_nic_name: 'host-1' },
    ],
  },
  {
    network_yaml: 'interfaces:\n  - name: eth0\n    type: ethernet\n    state: up\n    ipv4:\n      address:\n        - ip: 192.0.0.10\n          prefix-length: 24\n      enabled: true\n      dhcp: false\ndns-resolver:\n  config:\n    server:\n      - 192.0.0.1\nroutes:\n  config:\n    - destination: 0.0.0.0/0\n      next-hop-address: 192.0.0.2\n      next-hop-interface: eth0\n      table-id: 254\n',
    mac_interface_map: [
      { mac_address: '00:00:5e:00:53:ae', logical_nic_name: 'host-2' },
    ],
  },
];
