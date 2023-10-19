create table suburb
(
    suburb          text not null
        constraint data_by_suburb_pkey
            primary key,
    postcode        integer,
    lga             text,
    region          text,
    area_sqkm       numeric,
    population      integer,
    average_rent    numeric,
    ptv_stops_count integer,
    openspace_rate  numeric,
    crime_rate      numeric,
    crash_count     integer
);

create table liveability
(
    liveability_id     text not null
        constraint liveability_score2_pk
            primary key,
    liveability_suburb text
        constraint liveability_score2_data_by_suburb_suburb_fk
            references suburb,
    liveability_lga    text,
    ptv_score          numeric,
    openspace_score    numeric,
    crime_score        numeric,
    crash_score        numeric,
    liveability_score  numeric
);

create table university
(
    uni_dis_id     text not null
        constraint uni_suburb_score_pk
            primary key,
    university     text,
    uni_to_suburb  text,
    distance_km    numeric,
    distance_score integer
);