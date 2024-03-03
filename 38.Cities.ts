function describe_city(city: string, country: string ="default country"):void{
    console.log(`${city} is in ${country}.`);
}
describe_city("karachi","pakistan");
describe_city("New york","USA");
describe_city("canada");