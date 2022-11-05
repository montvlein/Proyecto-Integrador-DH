FROM maven:3.8-openjdk-18

WORKDIR /app
COPY pom.xml .
COPY src ./src
RUN mvn clean install
ENTRYPOINT [ "mvn", "spring-boot:run" ]