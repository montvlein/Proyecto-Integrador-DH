FROM maven:3.8-openjdk-18

WORKDIR /app
COPY pom.xml .
COPY src ./src
RUN mvn clean install -Pprod
ENTRYPOINT ["java", "-jar", "./target/DigitalBooking-0.0.1-SNAPSHOT.jar", "-Pprod"]